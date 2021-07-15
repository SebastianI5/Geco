package com.eng.geco;

import static com.eng.geco.User.user;
import static com.eng.geco.Util.debug;
import static com.eng.geco.Util.normalize;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.util.MultiValueMap;
import org.springframework.web.server.ResponseStatusException;

public abstract class AbstractController {

	@Autowired
	NamedParameterJdbcOperations template;

	protected List<Map<String, Object>> list(MultiValueMap<String, Object> parameters, Long offset, Long limit,
			String sort, String direction) {
		return list(convertToMap(parameters), offset, limit, sort, direction);
	}

	protected List<Map<String, Object>> list(Map<String, Object> parameters, Long offset, Long limit, String sort,
			String direction) {

		String sql = "select COUNT(0) OVER (PARTITION BY null) as record_count , * from " + view() + "_"
				+ user().tenant_id + " where 1=1 "
				+ conditions().entrySet().stream().filter(e -> parameters.containsKey(e.getKey()))
						.map(e -> e.getValue()).collect(Collectors.joining(" "))
				+ getOrderByString(sort, direction) + " limit " + limit + " offset " + offset;

		debug(sql);
		return template.queryForList(sql, parameters).stream().map(e -> normalize(e)).collect(Collectors.toList());
	}

	public Map<String, Object> get(String id) {
		List<Map<String, Object>> res = list(Map.of("id", id), 0L, 1L, "id", "asc");
		if (res.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Entity " + id + " not found");
		}
		return res.get(0);
	}

	protected  String table() { throw new UnsupportedOperationException("This controller does not support writing"); };

	protected abstract Map<String, String> conditions();

	protected abstract Map<String, String> ordering();

	protected String view() {
		return table();
	}

	private String getOrderByString(String sort, String direction) {
		String dir = List.of("asc", "desc").contains(direction.toLowerCase()) ? direction : "asc";
		return ordering().containsKey(sort) ? " order by " + ordering().get(sort) + " " + dir : "";
	}

	protected String insert(Set<String> fields) {
		String fieldList = fields.stream().collect(Collectors.joining(","));
		String paramList = fields.stream().map(e -> ":" + e).collect(Collectors.joining(","));
		return String.format("INSERT INTO %s_%s (%s) VALUES(%s)", table(), user().tenant_id, fieldList, paramList);
	}

	protected String update(Map<String, String> params, String key) {
		String paramList = params.entrySet().stream().filter(e -> !e.getKey().equals(key))
				.map(e -> e.getKey() + "=:" + e.getKey() + "::" + e.getValue()).collect(Collectors.joining(","));
		return String.format("update %s_%s set %s where %s", table(), user().tenant_id, paramList, key + "=:" + key);
	}

	private Map<String, Object> convertToMap(MultiValueMap<String, Object> p) {
		HashMap<String, Object> result = new HashMap<>();
		p.keySet().stream().forEach(k -> result.put(k, p.get(k).size() > 1 ? p.get(k) : p.getFirst(k)));
		return result;
	}

}

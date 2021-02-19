package com.eng.geco;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.postgresql.util.PGobject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.databind.ObjectMapper;

public abstract class AbstractController {

    @Autowired
    NamedParameterJdbcOperations template;

	protected List<Map<String, Object>> list(Map<String, String> parameters,
             Long offset,  Long limit,
             String sort,  String direction,
             Map<String, String> headers) {

        User user = User.user(headers);

        System.out.println("User logged : " + user.given_name + " " + user.family_name);

        String sql = "select COUNT(0) OVER (PARTITION BY null) as record_count , * from geco."+ table() + "_" + tenantId(user) + " where 1=1 "
                + conditions()
                .entrySet()
                .stream()
                .filter(e -> parameters.containsKey(e.getKey()))
                .map(e -> e.getValue()).collect(Collectors.joining(" "))
                + " order by " + getOrderByString(sort, direction) + " limit " + limit + " offset " + offset;

        System.out.println("sql: " + sql);
        return template.queryForList(sql, parameters).stream().map(e -> normalize(e)).collect(Collectors.toList());
    }

	public Map<String, Object> get(String id, Map<String, String> headers) {
        List<Map<String, Object>> res = list(Map.of("id", id), 0L, 1L, "id", "asc", headers);
        if (res.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Entity " + id + " not found");
        }

        return res.get(0);
    }

	protected abstract String table();
	protected abstract Map<String, String> conditions();
	protected abstract Map<String, String> ordering();

	public String tenantId(User user) {
		return "geco";
	}

	private String getOrderByString(String sort, String direction) {
        String dir = List.of("asc", "desc").contains(direction.toLowerCase()) ? direction : "asc";
        return ordering().containsKey(sort) ? ordering().get(sort) + " " + dir : " id " + dir;
    }

	protected Map<String, Object> normalize(Map<String, Object> input) {
        Map<String, Object> result = new HashMap<>();
        input.forEach((k, v) -> {
            if (v instanceof PGobject) {
                PGobject o = (PGobject) v;
                result.put(k, parseJson(o.getValue()));
            } else {
                result.put(k, v);
            }
        });
        return result;
    }

	private Object parseJson(String input) {
        ObjectMapper om = new ObjectMapper();
        try {
            return om.readValue(input, Object.class);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}

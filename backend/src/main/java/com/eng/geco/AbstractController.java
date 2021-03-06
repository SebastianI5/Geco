package com.eng.geco;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
import static com.eng.geco.Util.* ;
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

        debug("User logged : " + user.given_name + " " + user.family_name);

        String sql = "select COUNT(0) OVER (PARTITION BY null) as record_count , * from "+ table() + "_" + user.tenant_id + " where 1=1 "
                + conditions()
                .entrySet()
                .stream()
                .filter(e -> parameters.containsKey(e.getKey()))
                .map(e -> e.getValue()).collect(Collectors.joining(" "))
                + getOrderByString(sort, direction) + " limit " + limit + " offset " + offset;

        debug( sql);
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



	private String getOrderByString(String sort, String direction) {
        String dir = List.of("asc", "desc").contains(direction.toLowerCase()) ? direction : "asc";
        return ordering().containsKey(sort) ? " order by " + ordering().get(sort) + " " + dir : "";
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

	protected Object parseJson(String input) {
        ObjectMapper om = new ObjectMapper();
        try {
            return om.readValue(input, Object.class);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    protected String stringfy(Object input){
        ObjectMapper om = new ObjectMapper();
         try {
            return om.writeValueAsString(input);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    protected String insert( Set<String> fields , String tenantId , String table ){

        String fieldList = fields.stream().collect(Collectors.joining(","));
        String paramList = fields
            .stream()
            .map(e -> ":"+ e)
            .collect(Collectors.joining(","));
        return String.format("INSERT INTO %s_%s (%s) VALUES(%s)", table, tenantId , fieldList , paramList);
    }


    protected String update(Map<String, String> params , String tenantId , String table ,String key ){

        String paramList = params.entrySet().stream()
        .filter(e -> ! e.getKey().equals(key))
        .map(e -> e.getKey() + "=:" + e.getKey() + "::" + e.getValue() )
        .collect(Collectors.joining(","));
        return String.format("update %s_%s set %s where %s",  table, tenantId, paramList, key + "=:" + key );
    }

}

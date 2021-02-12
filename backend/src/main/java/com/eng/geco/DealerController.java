
package com.eng.geco;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.postgresql.util.PGobject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

/**
 *
 */
@RestController
@CrossOrigin
public class DealerController {

    @Autowired
    NamedParameterJdbcOperations template;

    private static Map<String, String> queryConditions = Map.of(
        "description_like" , " and lower( description ) like lower( '%'||:description_like||'%')",
        "brand_id", " and :brand_id in (select json_array_elements(mandates) -> 'brand' ->> 'id'  ) ",
        "service", " and :service in ( select json_array_elements_text(json_array_elements(mandates) -> 'services') )",
        "network_id", " and upper(:network_id) in (select json_array_elements(structures) -> 'network' ->> 'id'  )",
        "region_id", " and upper(:region_id) in (select json_array_elements(structures) -> 'region' ->> 'id'  )",
        "zone_id", " and upper(:zone_id) in (select json_array_elements(structures) -> 'zone' ->> 'id'  )",
        "dealership_id", " and dealership in (select dealership from geco.dealers_geco where id = :dealership_id)",
        "dealership_group", " and id = :dealership_group",
        "vatcode", " and vatcode = :vatcode",
        "id" , " and id = :id"
    );

    private static Map<String, String> ordering = Map.of(
        "id" , "id ",
        "status_id", "status ->> 'id' ",
        "description", "description "
    );

    @GetMapping("/dealers")
    public List<Map<String, Object>> list( @RequestParam Map<String, String> parameters,
                             @RequestParam(defaultValue = "0") Long offset  ,
                             @RequestParam(defaultValue = "10") Long limit ,
                             @RequestParam(defaultValue = "id") String sort,
                             @RequestParam(defaultValue = "asc") String direction
                             ) {
        String sql = "select COUNT(0) OVER (PARTITION BY null) as record_count , * from geco.dealers_geco where 1=1 " +
        queryConditions
            .entrySet()
            .stream()
            .filter(e -> parameters.containsKey(e.getKey()))
            .map(e -> e.getValue())
            .collect(Collectors.joining(" ")) +
            " order by " + getOrderByString(sort, direction) +
            " limit " + limit +
            " offset " + offset ;
        System.out.println("sql: " + sql);
        return template.queryForList(sql, parameters).stream().map(e -> normalize(e)).collect(Collectors.toList());
    }



    @GetMapping("/dealers/{id}")
    public Map<String,Object> get( @PathVariable String id ){
        String sql = "select * from geco.dealers_geco where id = :id";
        try {
            return normalize(template.queryForMap(sql, Map.of("id" ,id )));
        } catch (EmptyResultDataAccessException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Dealer "+ id +" not found");
        }
    }



    private Map<String, Object> normalize(Map<String, Object> input) {
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

    private String getOrderByString(String sort , String direction ){
        String dir = List.of("asc", "desc").contains( direction.toLowerCase() ) ? direction : "asc" ;
        return ordering.containsKey(sort) ? ordering.get(sort) + " " + dir : " id " + dir ;
    }


}

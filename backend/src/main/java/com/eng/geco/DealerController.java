
package com.eng.geco;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 */
@RestController
@CrossOrigin
public class DealerController extends AbstractController{

    private static Map<String, String> queryConditions = Map.of("description_like",
            " and lower( description ) like lower( '%'||:description_like||'%')", "brand_id",
            " and :brand_id in (select json_array_elements(mandates) -> 'brand' ->> 'id'  ) ", "service",
            " and :service in ( select json_array_elements_text(json_array_elements(mandates) -> 'services') )",
            // "network_id", " and upper(:network_id) in (select json_array_elements(structures) -> 'network' ->> 'id'  )",
            // "region_id", " and upper(:region_id) in (select json_array_elements(structures) -> 'region' ->> 'id'  )",
            // "zone_id", " and upper(:zone_id) in (select json_array_elements(structures) -> 'zone' ->> 'id'  )",
            "dealership_id", " and dealership in (select dealership from dealers_geco where id = :dealership_id)",
            "dealership_group", " and id = :dealership_group", "vatcode", " and vatcode = :vatcode", "id",
            " and id = :id",
            "idpec_not_null" , " and idpec is not null",
            "idpec_null" , " and idpec is null",
            "fake", " and fake = :fake"
            );

    private static Map<String, String> ordering = Map.of("id", "id ", "status_id", "status ->> 'id' ", "description",
            "description ");

    @GetMapping("/dealers")
    @Override
    public List<Map<String, Object>> list(@RequestParam Map<String, String> parameters,
            @RequestParam(defaultValue = "0") Long offset, @RequestParam(defaultValue = "10") Long limit,
            @RequestParam(defaultValue = "id") String sort, @RequestParam(defaultValue = "asc") String direction,
            @RequestHeader Map<String, String> headers) {

        return super.list(parameters, offset, limit, sort, direction, headers);
    }

    @GetMapping("/dealers/{id}")
    @Override
    public Map<String, Object> get(@PathVariable String id, @RequestHeader Map<String, String> headers) {

        Map<String, Object> dealer = super.get(id, headers);
        String query = "select * from contracts_" +  User.user(headers).tenant_id + " where dealer_id = :id ";
        dealer.put("contracts", template.queryForList(query, Map.of("id", id))
                .stream()
                .map(e -> normalize(e))
                .collect(Collectors.toList()));
        return dealer;
    }

	@Override
	protected String table() {
		return "dealers";
	}

	@Override
	protected Map<String, String> conditions() {
		return queryConditions;
	}

	@Override
	protected Map<String, String> ordering() {
		return ordering;
	}







}

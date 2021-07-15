
package com.eng.geco;

import static com.eng.geco.User.user;
import static com.eng.geco.Util.normalize;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 */
@RestController
@CrossOrigin
@RequestMapping("/api")
public class DealersController extends AbstractController {

	//@formatter:off
    private static Map<String, String> queryConditions = Map.of(
            //"brand_id"," and :brand_id in (select json_array_elements(mandates) ->> 'brand_id' ) ",
            //"service"," and :service in ( select json_array_elements_text(json_array_elements(mandates) -> 'services') )",
            // "network_id", " and upper(:network_id) in (select json_array_elements(structures) -> 'network' ->> 'id'  )",
            // "region_id", " and upper(:region_id) in (select json_array_elements(structures) -> 'region' ->> 'id'  )",
            // "zone_id", " and upper(:zone_id) in (select json_array_elements(structures) -> 'zone' ->> 'id'  )",
            //"dealership_id", " and dealership in (select dealership from dealers_geco where id = :dealership_id)",
            // "dealership_group", " and id = :dealership_group",
            "vatcode", " and vatcode = :vatcode",
            "id_like", "and (id like '%'||:id_like||'%' or lower( description ) like lower( '%'||:id_like||'%') )",
            "idpec_not_null" , " and idpec is not null",
            "idpec_null" , " and idpec is null",
            "fake", " and fake = :fake",
            "status", " and status in (:status)",
            "id", " and id = :id"
            );
    //@formatter:on
	private static Map<String, String> ordering = Map.of("id", "id ", "status_id", "status ->> 'id' ", "description",
			"description ");

	@GetMapping("/dealers")
	@Override
	@Authenticated
	@Audit
	public List<Map<String, Object>> list(@RequestParam MultiValueMap<String, Object> parameters,
			@RequestParam(defaultValue = "0") Long offset, @RequestParam(defaultValue = "10") Long limit,
			@RequestParam(defaultValue = "id") String sort, @RequestParam(defaultValue = "asc") String direction) {
		return super.list(parameters, offset, limit, sort, direction);
	}

	@GetMapping("/dealers/{id}")
	@Override
	@Authenticated
	@Audit
	public Map<String, Object> get(@PathVariable String id) {

		Map<String, Object> dealer = super.get(id);
		String query = "select * from contracts_" + user().tenant_id + " where dealer_id = :id ";
		dealer.put("contracts", template.queryForList(query, Map.of("id", id)).stream().map(e -> normalize(e))
				.collect(Collectors.toList()));
		return dealer;
	}
	
	@Override
	protected String view() {
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

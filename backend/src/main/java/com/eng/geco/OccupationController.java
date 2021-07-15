package com.eng.geco;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class OccupationController extends AbstractController {


	@Override
	protected String view() {
		return "v_occupation";
	}

	//@formatter:off
    @Override
    protected Map<String, String> conditions() {
        return Map.of(
            "dealer_id", " and (dealer_id like '%'||:dealer_id||'%' or lower( description ) like lower( '%'||:dealer_id||'%')) ",
            "color", " and color in ( :color )" ,
            "brand_id" , " and brand_id in (:brand_id)");
    }
    //@formatter:on

	@Override
	protected Map<String, String> ordering() {
		return Collections.emptyMap();
	}

	@GetMapping("/reports/occupation")
	@Override
	@Authenticated
	@Audit
	public List<Map<String, Object>> list(@RequestParam MultiValueMap<String, Object> parameters,
			@RequestParam(defaultValue = "0") Long offset, @RequestParam(defaultValue = "10") Long limit,
			@RequestParam(defaultValue = "idpec") String sort, @RequestParam(defaultValue = "asc") String direction) {

		return super.list(parameters, offset, limit, sort, direction);
	}

}

package com.eng.geco;

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
public class DealersNoPecController extends AbstractController {

	@Override
	protected String view() {
		return "v_dealers_no_pec";
	}

	//@formatter:off
    @Override
    protected Map<String, String> conditions() {
        return Map.of(
            "dealer_id", " and ( dealer_id like '%'||:dealer_id||'%' or lower( description ) like lower( '%'||:dealer_id||'%') ) ",
            "brand_id" , " and brand_id in (:brand_id)",
            "vatcode", " and vatcode like '%'||:vatcode||'%'");
    }
    //@formatter:on

	@Override
	protected Map<String, String> ordering() {
		return Map.of("vatcode", "vatcode", "dealer_id", "dealer_id");
	}

	@GetMapping("/reports/dealers-no-pec")
	@Override
	@Authenticated
	@Audit
	public List<Map<String, Object>> list(@RequestParam MultiValueMap<String, Object> parameters,
			@RequestParam(defaultValue = "0") Long offset, @RequestParam(defaultValue = "10") Long limit,
			@RequestParam(defaultValue = "vatcode") String sort, @RequestParam(defaultValue = "asc") String direction) {

		return super.list(parameters, offset, limit, sort, direction);
	}

}

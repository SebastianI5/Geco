package com.eng.geco;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class DealersNoPecController extends AbstractController {

    @Override
    protected String table() {
        return "v_dealers_no_pec";
    }

    @Override
    protected Map<String, String> conditions() {
        return Collections.emptyMap();
    }

    @Override
    protected Map<String, String> ordering() {
        return Map.of("vatcode", "vatcode", "dealer_id", "dealer_id");
    }

    @GetMapping("/reports/dealers-no-pec")
    @Override
    public List<Map<String, Object>> list(@RequestParam Map<String, String> parameters,
            @RequestParam(defaultValue = "0") Long offset, @RequestParam(defaultValue = "10") Long limit,
            @RequestParam(defaultValue = "vatcode") String sort, @RequestParam(defaultValue = "asc") String direction,
            @RequestHeader Map<String, String> headers) {

        return super.list(parameters, offset, limit, sort, direction, headers);
    }

}

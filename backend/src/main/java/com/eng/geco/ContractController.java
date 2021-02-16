package com.eng.geco;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class ContractController extends AbstractController {
	
	 @Autowired
	 NamedParameterJdbcOperations template;
	 
	 private static Map<String, String> queryConditions = Map.of("id"," and id = :id");
	 
	 private static Map<String, String> ordering = Map.of("id", "id ");
	 
	 @GetMapping("/contracts")
	 public List<Map<String, Object>> list(@RequestParam Map<String, String> parameters,
            @RequestParam(defaultValue = "0") Long offset, @RequestParam(defaultValue = "10") Long limit,
            @RequestParam(defaultValue = "id") String sort, @RequestParam(defaultValue = "asc") String direction,
            @RequestHeader Map<String, String> headers) {

       return super.list(parameters, offset, limit, sort, direction, headers);
    }

	@Override
	protected String table() {
		return "contracts";
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

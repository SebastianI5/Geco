package com.eng.geco;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
public class DocumentTypesController extends AbstractController {

    private static Map<String, String> queryConditions = Map.of(
            "id"," and id = :id",
            "service_id" , " and service_id =:service_id",
            "type" , " and type =:type",
            "mandatory" , " and mandatory =:mandatory"
    );

    private static Map<String, String> ordering = Map.of("id", "id", "sort", "sort");


    @GetMapping("/doctypes")
    @Override
    protected List<Map<String, Object>> list(@RequestParam Map<String, String> parameters,
                @RequestParam(defaultValue = "0") Long offset, @RequestParam(defaultValue = "10") Long limit,
                @RequestParam(defaultValue = "id") String sort, @RequestParam(defaultValue = "asc") String direction,
                @RequestHeader Map<String, String> headers)
    {
        return super.list(parameters, offset, limit, sort, direction, headers);
    }


    @GetMapping("/doctypes/{id}")
    @Override
    public Map<String, Object> get(@PathVariable String id, @RequestHeader Map<String, String> headers) {
        return super.get(id, headers);
    }


	@Override
	protected String table() {
		return "document_types";
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

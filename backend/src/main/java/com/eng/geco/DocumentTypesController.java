package com.eng.geco;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class DocumentTypesController extends AbstractController {
	//@formatter:off
    private static Map<String, String> queryConditions = Map.of(
            "id", " and id = :id",
            "service_id"," and :service_id in (select json_array_elements_text(services))",
            "mandatory", " and mandatory =:mandatory",
            "existing", " and id not in (:existing)",
            "id_in", " and id in (:id_in)"
            );
    //@formatter:on
	private static Map<String, String> ordering = Map.of("id", "id", "sort", "sort");

	@GetMapping("/doctypes")
	@Override
	@Authenticated
	@Audit
	public List<Map<String, Object>> list(@RequestParam MultiValueMap<String, Object> parameters,
			@RequestParam(defaultValue = "0") Long offset, @RequestParam(defaultValue = "10") Long limit,
			@RequestParam(defaultValue = "id") String sort, @RequestParam(defaultValue = "asc") String direction) {

		if (parameters.containsKey("service_id") && parameters.get("service_id").size() > 1) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"Multiples service_id provided, only one required");
		}
		return super.list(parameters, offset, limit, sort, direction);
	}

	@GetMapping("/doctypes/{id}")
	@Override
	@Audit
	@Authenticated
	public Map<String, Object> get(@PathVariable String id) {
		return super.get(id);
	}

	@Override
	protected String view() {
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

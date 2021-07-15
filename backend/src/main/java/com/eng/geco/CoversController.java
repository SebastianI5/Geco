
package com.eng.geco;

import static com.eng.geco.Constants.BRANDS;
import static com.eng.geco.Constants.MARKETS;
import static com.eng.geco.Constants.SERVICES;
import static com.eng.geco.User.user;
import static com.eng.geco.Util.debug;
import static com.eng.geco.Util.stringfy;

import java.time.Instant;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class CoversController extends AbstractController {

	@Autowired
	DealersController dealerController;

	@Autowired
	BoxesController boxesController;

	@Autowired
	DocumentTypesController documentTypesController;

	//@formatter:off
    private static Map<String, String> queryConditions = Map.of(
            "id", " and id = :id",
            "box_id", " and box_id = :box_id",
            "box_id_null", " and box_id is null",
            "market", " and market = :market",
            "service_id", " and service_id = :service_id",
            "brand_id", " and brand_id = :brand_id",
            "dealer_id", " and dealer_id = :dealer_id",
            "username", " and username = :username",
            "available", " and not exists (select null from boxes_geco b where b.id = box_id and b.status <> 'SCATOLA.NEW')");
    //@formatter:on

	private static Map<String, String> ordering = Map.of("id", "id ");

	@GetMapping("/covers")
	@Override
	@Authenticated
	@Audit
	public List<Map<String, Object>> list(@RequestParam Map<String, Object> parameters,
			@RequestParam(defaultValue = "0") Long offset, @RequestParam(defaultValue = "10") Long limit,
			@RequestParam(defaultValue = "id") String sort, @RequestParam(defaultValue = "asc") String direction) {

		return super.list(parameters, offset, limit, sort, direction);
	}

	@GetMapping("/covers/{id}")
	@Override
	@Authenticated
	@Audit
	public Map<String, Object> get(@PathVariable String id) {
		return super.get(id);
	}

	private List<Validator> putValidator = List.of(input -> {
		if (input.get("box_id") == null) {
			return null;
		} else {
			try {
				boxesController.get(input.get("box_id").toString());
				return null;
			} catch (Exception e) {
				return e.getMessage();
			}
		}
	});

	@PutMapping("/covers/{id}")
	@Authenticated
	@Audit(true)
	public Map<String, Object> put(@PathVariable String id, @RequestBody Map<String, Object> body) {

		putValidator.stream().map(v -> v.validate(body)).filter(v -> v != null).findAny().ifPresent(a -> {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, a);
		});
		Map<String, Object> cover = get(id);
		Map<String, Object> params = new HashMap<>();
		Map<String, String> types = new HashMap<>();

		if (body.get("document_types") != null) {

			List<Map<String, Object>> documentTypes = new ArrayList<>();

			if (((List) body.get("document_types")).size() > 0) {
				documentTypes = documentTypesController.list(Map.of("id_in", body.get("document_types")), 0L, 100000L,
						"id", "asc");
			}
			if (documentTypes.size() != ((List) body.get("document_types")).size()) {
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "document_types list has not valid items");
			}
			params.put("document_types", stringfy(documentTypes));
			types.put("document_types", "json");
		}

		params.put("box_id", body.get("box_id"));
		types.put("box_id", "varchar");
		params.put("id", cover.get("id"));

		String sql = update(types, "id");
		debug(sql);
		template.update(sql, params);
		return get(id);
	}

	private List<Validator> postValidators = List.of(input -> {
		try {
			dealerController.get(input.get("dealer_id") + "");
			return null;
		} catch (Exception e) {
			return "dealer_id does not exist";
		}
	}, input -> MARKETS.contains(input.get("market") + "") ? null : "market does not exist",
			input -> SERVICES.contains(input.get("service_id") + "") ? null : "service_id does not exist",
			input -> BRANDS.contains(input.get("brand_id") + "") ? null : "brand_id does not exist");

	@PostMapping("/covers")
	@Authenticated
	@Audit(true)
	public Map<String, Object> post(@RequestBody Map<String, Object> body) {

		postValidators.stream().map(v -> v.validate(body)).filter(v -> v != null).findAny().ifPresent(a -> {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, a);
		});

		Map<String, Object> cover = new HashMap<>();
		String id = UUID.randomUUID().toString();
		cover.put("id", id);
		cover.put("dealer_id", body.get("dealer_id"));
		cover.put("status", "FRONTE.NEW");
		cover.put("username", user().name);
		cover.put("created_at", Instant.now().toString());
		cover.put("market", body.get("market"));
		cover.put("service_id", body.get("service_id"));
		cover.put("brand_id", body.get("brand_id"));
		String sql = insert(cover.keySet());
		debug(sql);
		template.update(sql, cover);
		return get(id);
	}

	@Override
	protected String table() {
		return "covers";
	}

	@Override
	protected String view() {
		return "v_covers";
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

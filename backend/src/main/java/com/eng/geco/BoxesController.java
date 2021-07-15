
package com.eng.geco;

import static com.eng.geco.Constants.BOX_STATUS_MACHINE;
import static com.eng.geco.User.user;
import static com.eng.geco.Util.debug;
import static com.eng.geco.Util.stringfy;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.util.MultiValueMap;
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
public class BoxesController extends AbstractController {

	//@formatter:off
    private static Map<String, String> queryConditions = Map.of(
        "id", " and id = :id ",
        "status"," and status in (:status)",
        "created_at", " and created_at = :created_at",
        "username"," and lower( username ) like lower( '%'||:username||'%')");
    //@formatter:on

	private static Map<String, String> ordering = Map.of("id", "id :: numeric", "created_at", "created_at");

	@GetMapping("/boxes")
	@Override
	@Authenticated
	@Audit
	public List<Map<String, Object>> list(@RequestParam MultiValueMap<String, Object> parameters,
			@RequestParam(defaultValue = "0") Long offset, @RequestParam(defaultValue = "10") Long limit,
			@RequestParam(defaultValue = "id") String sort, @RequestParam(defaultValue = "desc") String direction) {

		if (parameters.containsKey("id")) {
			try {
                String id = parameters.get("id").get(0).toString(); //is a list of values since is a multivalue map
				Integer.parseInt(id);
			} catch (Exception e) {
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Id must be numeric");
			}
		}

		return super.list(parameters, offset, limit, sort, direction);
	}

	@GetMapping("/boxes/{id}")
	@Override
	@Authenticated
	@Audit
	public Map<String, Object> get(@PathVariable String id) {

		return super.get(id);
	}

	private List<Validator> putValidator = List.of(
			input -> BOX_STATUS_MACHINE.keySet().contains(input.get("status") + "") ? null : "status does not exist",
			input -> BOX_STATUS_MACHINE.get(input.get("CURRENT.STATUS")).equals(input.get("status")) ? null
					: "status not valid");

	@PutMapping("/boxes/{id}")
	@Authenticated
	@Audit(true)
	public Map<String, Object> put(@PathVariable String id, @RequestBody Map<String, Object> body) {

		Map<String, Object> box = get(id);
		Map<String, Object> aux = new HashMap<>(body);
		List<Map<String, Object>> history = (List<Map<String, Object>>) box.get("history");
		if (history == null) {
			history = new ArrayList<>();
		}
		Map<String, Object> event = Map.of("by", user().name, "at", Instant.now().toString(), "old", box.get("status"),
				"new", body.get("status"));
		history.add(event);
		aux.put("CURRENT.STATUS", box.get("status"));
		putValidator.stream().map(v -> v.validate(aux)).filter(v -> v != null).findAny().ifPresent(a -> {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, a);
		});
		Map<String, String> types = new HashMap<>();
		types.put("status", "varchar");
		types.put("id", "varchar");
		types.put("history", "json");
		String sql = update(types, "id");
		debug(sql);
		template.update(sql, Map.of("id", id, "status", body.get("status"), "history", stringfy(history)));
		return get(id);
	}

	@PostMapping("/boxes")
	@Authenticated
	@Audit(true)
	public Map<String, Object> post(@RequestBody Map<String, Object> body) {

		Map<String, Object> box = new HashMap<>();
		String id = template.queryForObject("select max(id::int) + 1  from " + view() + "_" + user().tenant_id,
				Collections.emptyMap(), String.class);
		box.put("id", id);
		box.put("status", "SCATOLA.NEW");
		box.put("username", user().name);
		box.put("created_at", Instant.now().toString());
		String sql = insert(box.keySet());
		debug(sql);
		template.update(sql, box);
		return get(id);
	}

	@Override
	protected String table() {
		return "boxes";
	}

	@Override
	protected String view() {
		return "v_boxes";
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

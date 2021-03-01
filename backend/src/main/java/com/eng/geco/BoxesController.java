
package com.eng.geco;

import static com.eng.geco.Util.debug;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
public class BoxesController extends AbstractController{



    private static Map<String, String> queryConditions = Map.of("id"," and id = :id");

	private static Map<String, String> ordering = Map.of("id", "id ");

    @GetMapping("/boxes")
    @Override
    public List<Map<String, Object>> list(@RequestParam Map<String, String> parameters,
            @RequestParam(defaultValue = "0") Long offset, @RequestParam(defaultValue = "10") Long limit,
            @RequestParam(defaultValue = "id") String sort, @RequestParam(defaultValue = "asc") String direction,
            @RequestHeader Map<String, String> headers) {

        return super.list(parameters, offset, limit, sort, direction, headers);
    }

    @GetMapping("/boxes/{id}")
    @Override
    public Map<String, Object> get(@PathVariable String id, @RequestHeader Map<String, String> headers) {

        return super.get(id, headers);
    }
    
    @PutMapping("/boxes/{id}")
    public Map<String, Object> put(@PathVariable String id, @RequestBody Map<String, Object> body,
            @RequestHeader Map<String, String> headers) {

        Map<String, Object> box = get(id, headers);
        Map<String, String> types = new HashMap<>();
        types.put("status", "varchar");
        types.put("id", "varchar");

        String sql = update(types, User.user(headers).tenant_id, table(), "id");

        debug(sql);
        template.update(sql, Map.of("id", id, "status", body.get("status")));
        return get(id, headers);
    }

	@Override
	protected String table() {
		return "boxes";
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

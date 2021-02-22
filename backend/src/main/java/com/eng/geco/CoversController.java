
package com.eng.geco;

import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.time.Instant;
import java.util.HashMap;
import org.springframework.web.bind.annotation.CrossOrigin;
 import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 */
@RestController
@CrossOrigin
public class CoversController extends AbstractController{



    private static Map<String, String> queryConditions = Map.of(
            "id"," and id = :id",
    		"box_id", " and box_id = :box_id",
    		"box_id_null", " and box_id is null",
    		"market", " and market = :market",
    		"service_id", " and service_id = :service_id",
    		"brand_id", " and brand_id = :brand_id",
    		"dealer", " and dealer = :dealer",
    		"username", " and username = :username",
    		"available", " and not exists (select null from geco.boxes_geco b where b.id = box_id and b.status <> 'SCATOLA.NEW')");

	private static Map<String, String> ordering = Map.of("id", "id ");

    @GetMapping("/covers")
    @Override
    public List<Map<String, Object>> list(@RequestParam Map<String, String> parameters,
            @RequestParam(defaultValue = "0") Long offset, @RequestParam(defaultValue = "10") Long limit,
            @RequestParam(defaultValue = "id") String sort, @RequestParam(defaultValue = "asc") String direction,
            @RequestHeader Map<String, String> headers) {

        return super.list(parameters, offset, limit, sort, direction, headers);
    }

    @GetMapping("/covers/{id}")
    @Override
     public Map<String, Object> get(@PathVariable String id, @RequestHeader Map<String, String> headers) {

        return super.get(id, headers);
    }


    @PutMapping("/covers/{id}")
    public Map<String, Object> put(@PathVariable String id,
    		@RequestBody Map<String, String> body,
    		@RequestHeader Map<String, String> headers) {
        String sql = "update geco.covers_geco set box_id=:box_id where id=:id";
        Map<String, Object> cover = get(id, headers);
        Map<String, Object> params = new HashMap<>();
        params.put("box_id", body.get("box_id"));
        params.put("id", cover.get("id"));
    	template.update(sql, params);
    	return get(id, headers);
    }


    @PostMapping("/covers")
    public Map<String, Object> post( @RequestBody Map<String, String> body, @RequestHeader Map<String, String> headers){
        Map<String, Object> cover = new HashMap<>();
        String id = UUID.randomUUID().toString();
        cover.put("id", id);
        cover.put("dealer_id", body.get("dealer_id"));
        cover.put("status", "FRONTE.NEW");
        cover.put("username", User.user(headers).name );
        cover.put("created_at", Instant.now().toString());
        cover.put("market", body.get("market"));
        cover.put("service_id", body.get("service_id"));
        cover.put("brand_id", body.get("brand_id"));
        String sql = insert(cover.keySet(), User.user(headers).tenant_id, "covers" );
        template.update( sql , cover);
        return get(id , headers);
    }

	@Override
	protected String table() {
		return "covers";
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

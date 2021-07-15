package com.eng.geco;

import java.io.FileInputStream;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Value;
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
public class ContractsController extends AbstractController {

	@Value("${pdf_root}")
	private String pdfRoot;

	//@formatter:off
    private static Map<String, String> queryConditions = Map.of(
                                            "id", " and id = :id",
                                            "id_like", " and id like '%'||:id_like||'%'",
                                            "service_id", " and lower(service_id) in ( :service_id )",
                                            "brand_id", " and brand_id in ( :brand_id )",
                                            "dealer_id", " and ( dealer_id like '%'||:dealer_id||'%' or lower( description ) like lower( '%'||:dealer_id||'%'))");
    //@formatter:on

	private static Map<String, String> ordering = Map.of("id", "id ");

	@GetMapping("/contracts")
	@Override
	@Authenticated
	@Audit
	public List<Map<String, Object>> list(@RequestParam MultiValueMap<String, Object> parameters,
			@RequestParam(defaultValue = "0") Long offset, @RequestParam(defaultValue = "10") Long limit,
			@RequestParam(defaultValue = "id") String sort, @RequestParam(defaultValue = "asc") String direction) {

		if (parameters.get("service_id") != null) {
			List<Object> services = ((List<Object>) parameters.get("service_id")).stream()
					.map(s -> s.toString().toLowerCase()).collect(Collectors.toList());
			parameters.replace("service_id", services);
		}
		return super.list(parameters, offset, limit, sort, direction);
	}

	@GetMapping("/contracts/{id}/documents/{type}/versions/{created_at}/pdf")
	@Authenticated
	@Audit
	public void download(@PathVariable String id, @PathVariable String type, @PathVariable String created_at,
			HttpServletResponse response) {
		Map<String, Object> contract = super.get(id);
		List<Map<String, Object>> docs = (List<Map<String, Object>>) contract.get("documents");
		Map<String, Object> doc;
		Map<String, Object> version;
		Optional<Map<String, Object>> opDoc = docs.stream().filter(e -> e.containsKey("type"))
				.filter(e -> e.get("type").toString().equals(type)).findFirst();

		doc = opDoc.isPresent() ? opDoc.get()
				: opDoc.orElseThrow(
						() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Document Type does not exist"));

		List<Map<String, Object>> versions = (List<Map<String, Object>>) doc.get("versions");

		Optional<Map<String, Object>> opVersion = versions.stream().filter(e -> e.containsKey("created_at"))
				.filter(e -> e.get("created_at").toString().equals(created_at)).findFirst();
		version = opVersion.isPresent() ? opVersion.get()
				: opVersion.orElseThrow(
						() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Version created_at does not exist"));

		Map<String, Object> digital = (Map<String, Object>) version.get("digital");
		String pdf = (String) digital.get("pdf");

		try (FileInputStream is = new FileInputStream(pdfRoot + pdf)) {
			is.transferTo(response.getOutputStream());
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
		}
	}

	@Override
	protected String view() {
		return "v_contracts";
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

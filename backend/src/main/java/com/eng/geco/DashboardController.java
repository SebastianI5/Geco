package com.eng.geco;

import static com.eng.geco.User.user;
import static com.eng.geco.Util.debug;
import static com.eng.geco.Util.normalize;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class DashboardController {

	@Autowired
	NamedParameterJdbcOperations template;

	@GetMapping("/dashboard/{section:^(?:contracts_incompleted_by_service|documents_by_year|documents_by_service|contracts_completed_by_service)$}")
	@Authenticated
	@Audit
	public Map<String, Object> get(@PathVariable String section) {

		Map<String, Object> result = new HashMap<>();

		List<Object> dataset = new ArrayList<>();
		List<String> labels = new ArrayList<>();
		List<Map<String, Object>> data;
		String sql = "select * from v_" + section + "_" + user().tenant_id + " order by label ";
		debug(sql);
		List<Map<String, Object>> queryData = template.queryForList(sql, Collections.emptyMap()).stream()
				.map(e -> normalize(e)).collect(Collectors.toList());

		queryData.stream().forEach(e -> {
			labels.add(e.get("label").toString());
			dataset.add(e.get("data"));
		});

		data = List.of(Map.of("data", dataset, "label", "document"));

		result.put("labels", labels);
		result.put("data", data);
		return result;
	}

}

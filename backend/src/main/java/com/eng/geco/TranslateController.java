package com.eng.geco;

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
public class TranslateController {

	@Autowired
	NamedParameterJdbcOperations template;

	@GetMapping("/translation/{lang}")
	public Map<Object, Object> get(@PathVariable String lang) {
		String sql = "select label , translation from translation_geco where 1=1 and language = :lang  ";
		return template.queryForList(sql, Map.of("lang", lang)).stream()
        .collect(Collectors.toMap(
            e -> e.get("label"),
             e -> e.get("translation")
            ));
	}

}

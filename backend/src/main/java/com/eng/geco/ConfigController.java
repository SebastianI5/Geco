package com.eng.geco;

import static com.eng.geco.Util.debug;

import java.io.IOException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ConfigController {

	@Value("${base_url}")
	private String base_url;

	@Value("${ids_url}")
	private String ids_url;

	@Value("${logout_url}")
	private String logout_url;

	@Value("${client_id}")
	private String client_id;

	@Value("${fake_authentication:false}")
	private boolean fake_authentication;


	@Value("${audit.persist:false}")
	private boolean persist_audit;




	@GetMapping("/config")
	public Map<String, Object> config() throws IOException {
		debug("configuration request");
        String buildTime = new String(this.getClass().getClassLoader().getResourceAsStream("build-time.txt").readAllBytes());
		return Map.of("base_url", base_url, "ids_url", ids_url, "client_id", client_id, "fake_authentication",
				fake_authentication , "persist_audit", persist_audit, "build_time", buildTime , "logout_url" , logout_url );
	}
}

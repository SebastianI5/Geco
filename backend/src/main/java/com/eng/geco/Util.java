package com.eng.geco;

import static com.eng.geco.User.user;

import java.time.Instant;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.postgresql.util.PGobject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class Util {

	@Value("${severity:DEBUG}")
	public void setSeverity(String s) {
		SEVERITY = s;
	}

	public static String SEVERITY;

	private Util() {
	}

	public static void debug(Object message) {
		if (List.of("DEBUG").contains(SEVERITY.toUpperCase())) {
			log("DEBUG", message);
		}
	}

	public static void info(Object message) {
		if (List.of("DEBUG", "INFO").contains(SEVERITY.toUpperCase())) {
			log("INFO ", message);
		}
	}

	public static void error(Object message) {
		log("ERROR", message);
	}

	private static void log(String level, Object message) {
		try {
			throw new RuntimeException();
		} catch (Exception e) {
			String loggedUser = user() == null ? "" : user().name;
			System.out.printf("%s [%5s] (%s) %s.%s:%d - %s \n", Instant.now(), level, loggedUser,
					e.getStackTrace()[2].getClassName(), e.getStackTrace()[2].getMethodName(),
					e.getStackTrace()[2].getLineNumber(), message);
		}
	}

	public static Map<String, Object> normalize(Map<String, Object> input) {
		Map<String, Object> result = new HashMap<>();
		input.forEach((k, v) -> {
			if (v instanceof PGobject) {
				PGobject o = (PGobject) v;
				result.put(k, parseJson(o.getValue()));
			} else {
				result.put(k, v);
			}
		});
		return result;
	}

	public static Object parseJson(String input) {
		ObjectMapper om = new ObjectMapper();
		try {
			return om.readValue(input, Object.class);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	public static String stringfy(Object input) {
		ObjectMapper om = new ObjectMapper();
		try {
			return om.writeValueAsString(input);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

}

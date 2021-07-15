package com.eng.geco;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;
import static com.eng.geco.Util.*;
import com.auth0.jwt.JWT;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.interfaces.DecodedJWT;

@Component
@Aspect
public class AuthenticatedAspect {

	@Autowired
	HttpServletRequest request;

	@Before("@annotation(com.eng.geco.Authenticated)")
	public void auth() {
        debug("Verifiyng user...");
		if (User.user() == null) {
            debug("Loading user from request");
			User.setUser(user());
		}
	}

	public User user() {
        debug("Reading access_token from request");
		String accessToken = request.getHeader("x-authorization") != null ? request.getHeader("x-authorization")
				: request.getParameter("x-authorization");
		if (accessToken == null) {
            debug("access_token not found in request");
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Header x-authorization not found");
		}
		try {
            debug("decoding token...");
			DecodedJWT jwt = JWT.decode(accessToken);
			Date expirationDate = jwt.getExpiresAt();
            debug("verifiyng token expiration...");
			if (expirationDate.compareTo(new Date()) <= 0) {
				throw new ResponseStatusException(HttpStatus.UNAUTHORIZED,
						"Header x-authorization contains expired token");
			}
			return new User().withFamilyName(jwt.getClaim("family_name").asString())
					.withGivenName(jwt.getClaim("given_name").asString()).withName(jwt.getClaim("name").asString())
					.withTenantId("geco");
		} catch (JWTDecodeException exception) {
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Header x-authorization not valid");
		}finally {
            debug("Authentication ended");
        }
	}

}

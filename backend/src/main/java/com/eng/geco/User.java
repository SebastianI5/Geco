package com.eng.geco;

import java.util.Date;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import com.auth0.jwt.JWT;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.interfaces.DecodedJWT;

public class User {

    public String given_name;
    public String family_name;

    public User withGivenName(String given_name){
        this.given_name = given_name ;
        return this;
    }

    public User withFamilyName(String family_name){
        this.family_name = family_name ;
        return this;
    }
    
    public static User user(Map<String, String> headers) {
    	String accessToken = headers.get("x-authorization");
        if (accessToken == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Header x-authorization not found");
        }
        try {
            DecodedJWT jwt = JWT.decode(accessToken);
            Date expirationDate = jwt.getExpiresAt();
            if (expirationDate.compareTo(new Date()) <= 0) {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED,
                        "Header x-authorization contains expired token");
            }
            return new User().withFamilyName(jwt.getClaim("family_name").asString())
                    .withGivenName(jwt.getClaim("given_name").asString());
        } catch (JWTDecodeException exception) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Header x-authorization not valid");
        }
    }

}

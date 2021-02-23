package com.eng.geco;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class DashboardController {


    @GetMapping("/dashboard")
    public String get(@RequestHeader Map<String, String> headers){
        return User.user(headers).tenant_id;
    }


}

package com.eng.geco;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.websocket.server.PathParam;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class DashboardController {

    @GetMapping("/dashboard/{section}")
    public Map<String, Object> get(@PathVariable String section, @RequestHeader Map<String, String> headers) {

        Map<String, Object> result = new HashMap<>();

        List<Map<String, Object>> data = List.of(
                Map.of("data", List.of(65, 59, 80, 81, 56, 55, 40), "label", "Serie A"),
                Map.of("data", List.of(44, 34, 78, 39, 48, 33, 40), "label", "Serie B"));

        List<String> labels = List.of("2006", "2007", "2008", "2009", "2010", "2011", "2012");
        Map<String, Object> options = Map.of("responsive", true, "scaleShowVerticalLines", false);
        result.put("data", data);
        result.put("legend", true);
        result.put("labels", labels);
        result.put("options", options);
        return result;

    }

    @GetMapping("/dashboard/bubble")
    public Map<String, Object> get( @RequestHeader Map<String, String> headers) {

        Map<String, Object> result = new HashMap<>();


        List<Map<String, Object>>  data = List.of(Map.of("data", List.of(
                Map.of("x", 1, "y", 2, "r", 10), // point
                Map.of("x", 3, "y", 4, "r", 10), // point
                Map.of("x", 5, "y", 1, "r", 20) // point
        ),
        "label", "Serie A",
        "backgroundColor", "#FF9966"
        ));

        result.put("data", data);
        result.put("legend", true);

        return result;
    }

}

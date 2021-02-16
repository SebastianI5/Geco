package com.eng.geco;

import java.util.List;
import java.util.Map;

public class Util {

	public static String getOrderByString(String sort, String direction, Map<String, String> ordering) {
        String dir = List.of("asc", "desc").contains(direction.toLowerCase()) ? direction : "asc";
        return ordering.containsKey(sort) ? ordering.get(sort) + " " + dir : " id " + dir;
    }
}

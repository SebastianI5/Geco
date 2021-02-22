package com.eng.geco;

import java.time.Instant;
import java.util.List;
import java.util.Map;

public class Util {

	public static String getOrderByString(String sort, String direction, Map<String, String> ordering) {
        String dir = List.of("asc", "desc").contains(direction.toLowerCase()) ? direction : "asc";
        return ordering.containsKey(sort) ? ordering.get(sort) + " " + dir : " id " + dir;
    }


    public static void debug(Object message ){
        System.out.printf("%s [DEBUG] %s \n", Instant.now(), message.toString() );
    }

    public static void info(Object message ){
        System.out.printf("%s [INFO ] %s \n", Instant.now(), message.toString() );
    }

    public static void error(Object message ){
        System.out.printf("%s [ERROR] %s \n", Instant.now(), message.toString() );
    }

    private Util(){}
}

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
        log("DEBUG", message);
    }

    public static void info(Object message ){
        log("INFO", message);
    }

    public static void error(Object message ){
        log("ERROR", message) ;
   }


    private static void log(String level , Object message){
        try{
            throw new RuntimeException();
        }
        catch (Exception e ){
            System.out.printf("%s [%5s] %s.%s:%d - %s \n", Instant.now(),  level ,  e.getStackTrace()[2].getClassName() , e.getStackTrace()[2].getMethodName() , e.getStackTrace()[2].getLineNumber() , message );
        }
    }

    private Util(){}
}

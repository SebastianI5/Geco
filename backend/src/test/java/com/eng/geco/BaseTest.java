package com.eng.geco;
import java.util.Map;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.junit.jupiter.api.BeforeEach;


public abstract class BaseTest {

    protected String base_url = "/api";

    @BeforeEach
    public void setup(){
        User.setUser(new User().withName("first name last name").withTenantId("geco"));
    }


    protected void cleanup(String id , AbstractController controller  ){
        controller.template.update("delete from "+ controller.table() +" where id = :id", Map.of("id", id) );
    }

    protected String stringfy(Object input){
        ObjectMapper om = new ObjectMapper();
         try {
            return om.writeValueAsString(input);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    protected Object parseJson(String input) {
        ObjectMapper om = new ObjectMapper();
        try {
            return om.readValue(input, Object.class);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


    protected static Map<String, Object> getHeaderMap(){
        return Map.of("x-authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlYyUFdKTEg3Z2dGVTJwaXRnWWNreUJEY3ZQelJhS1B3UXZWQS1PWmR3TTAifQ.eyJleHAiOjI2MTM1NTE2MDgsImlhdCI6MTYxMzU1MDcwOCwiYXV0aF90aW1lIjoxNjEzNTQ5ODA3LCJqdGkiOiJjNTI2OWIyYy05ZGZkLTRiNjctOGQ1YS00MWM5MTE4ZmMxMWYiLCJpc3MiOiJodHRwOi8vMTYxLjI3LjE0Ni4xNTo4MTgwL2F1dGgvcmVhbG1zL0dlY29fUmVhbG0iLCJzdWIiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiR2Vjb0xvY2FsaG9zdCIsIm5vbmNlIjoiMC41NTQzMzcxODgzMzE3MjQxIiwic2Vzc2lvbl9zdGF0ZSI6ImVjNzNiODQyLTMwMjAtNGYxNC1hM2UwLTA4MDU4MzM1MGUxNCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo0MjAwIl0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiZmlyc3QgbmFtZSBsYXN0IG5hbWUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwiZ2l2ZW5fbmFtZSI6ImZpcnN0IG5hbWUiLCJmYW1pbHlfbmFtZSI6Imxhc3QgbmFtZSJ9.-EijvywTl0XlHZdNuBZ3pSqN6jClrBncP-EHZ9UDapY");
    }

    protected static String getAuthHeader(){
        return  getHeaderMap().get("x-authorization").toString();
    }


}

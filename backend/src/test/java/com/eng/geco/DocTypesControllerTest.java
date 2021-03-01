package com.eng.geco;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

@SpringBootTest
public class DocTypesControllerTest {
    @Autowired
    private ContractController controller;

    private  Map<String, String> getHeader(){
        return Map.of("x-authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlYyUFdKTEg3Z2dGVTJwaXRnWWNreUJEY3ZQelJhS1B3UXZWQS1PWmR3TTAifQ.eyJleHAiOjI2MTM1NTE2MDgsImlhdCI6MTYxMzU1MDcwOCwiYXV0aF90aW1lIjoxNjEzNTQ5ODA3LCJqdGkiOiJjNTI2OWIyYy05ZGZkLTRiNjctOGQ1YS00MWM5MTE4ZmMxMWYiLCJpc3MiOiJodHRwOi8vMTYxLjI3LjE0Ni4xNTo4MTgwL2F1dGgvcmVhbG1zL0dlY29fUmVhbG0iLCJzdWIiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiR2Vjb0xvY2FsaG9zdCIsIm5vbmNlIjoiMC41NTQzMzcxODgzMzE3MjQxIiwic2Vzc2lvbl9zdGF0ZSI6ImVjNzNiODQyLTMwMjAtNGYxNC1hM2UwLTA4MDU4MzM1MGUxNCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo0MjAwIl0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiZmlyc3QgbmFtZSBsYXN0IG5hbWUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwiZ2l2ZW5fbmFtZSI6ImZpcnN0IG5hbWUiLCJmYW1pbHlfbmFtZSI6Imxhc3QgbmFtZSJ9.-EijvywTl0XlHZdNuBZ3pSqN6jClrBncP-EHZ9UDapY");
    }

    private List<Map<String, Object>> getContractsWithParameters(Map<String, String> parameters){
        List<Map<String, Object>> lista = controller.list(parameters, 0L, 10L, "id", "asc", getHeader());
        assertNotNull(lista);
        return lista;
    }

    @Test
    public void testGetContractsValid_NoParameters() {
        Map<String, String> parameters = new HashMap<>();
        List<Map<String, Object>> lista = controller.list(parameters, 0L, 10L, "id", "asc", getHeader());
        assertNotNull(lista);
        assertTrue(lista.size() > 0);
    }

    @Test
    public void testGetContractsValid_IdParameterPresent(){
        Map<String, String> parameters = Map.of("id", "1");
        List<Map<String, Object>> lista = controller.list(parameters, 0L, 10L, "id", "asc", getHeader());
        assertNotNull(lista);
        assertTrue(lista.size() > 0);
    }

    @Test
    public void testGetContractsValid_IdParameterNonPresent(){
        Map<String, String> parameters = Map.of("id", "1000");
        List<Map<String, Object>> lista = controller.list(parameters, 0L, 10L, "id", "asc", getHeader());
        assertNotNull(lista);
        assertEquals( 0 , lista.size() );
    }

    @Test
    public void testGetContractsNotValid_IdParameterNull(){
        try {
            controller.list(null, 0L, 10L, "id", "asc", getHeader());
        } catch (NullPointerException e) {
            return;
        }
        fail("Eccezione NullPointerException non rilanciata");
    }

    private List<Map<String, Object>> getContracts(Long offset, Long limit, String sort, String direction){
        return controller.list(new HashMap<>(), offset, limit, sort, direction, getHeader());
    }

    @Test
    public void testGetContractsInvaild_offsetNegative(){
        try {
        	getContracts(-1L, 10L, "id", "asc");
        } catch (Exception e) {
            return ;
        }
        fail("Eccezione non rilanciata, offset negativo");
    }

    @Test
    public void testGetContractsInvaild_limitNegative(){
        try {
            getContracts(0L, -1L, "id", "asc");
        } catch (Exception e) {
            return ;
        }
        fail("Eccezione non rilanciata, limit negativo");
    }

    @Test
    public void testGetContractsInvaild_sortNotvalid(){
        try {
            List<Map<String, Object>> elem = getContracts(0L, 10L, "ids", "asc");
            elem.size();
        } catch (Exception e) {
            return ;
        }
        fail("Eccezione non rilanciata, sort id non valido");
    }


    @Test
    public void testGetContractsInvaild_directionNotvalid(){
        try {
            getContracts(0L, 10L, "id", "sca");
        } catch (Exception e) {
            return ;
        }
        fail("Eccezione non rilanciata, direction non valido");
    }

    @Test
    public void testGetContractIdValid(){
        Map<String, Object> box = controller.get("1", getHeader());
        assertNotNull(box);
        assertEquals("1", box.get("id".toUpperCase()));
    }

    @Test
    public void testGetContractIdNotValid(){
        try {
            controller.get("-1", getHeader());
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.NOT_FOUND, e.getStatus());
            return;
        }
        fail("Eccezione ResponseStatusException.NOT_FOUND non rilanciata");
    }

}

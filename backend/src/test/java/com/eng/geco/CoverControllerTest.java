package com.eng.geco;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

import java.time.Instant;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

@SpringBootTest
public class CoverControllerTest {

    @Autowired
    private CoversController controller;

    private Map<String, String> getHeader() {
        return Map.of("x-authorization",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlYyUFdKTEg3Z2dGVTJwaXRnWWNreUJEY3ZQelJhS1B3UXZWQS1PWmR3TTAifQ.eyJleHAiOjI2MTM1NTE2MDgsImlhdCI6MTYxMzU1MDcwOCwiYXV0aF90aW1lIjoxNjEzNTQ5ODA3LCJqdGkiOiJjNTI2OWIyYy05ZGZkLTRiNjctOGQ1YS00MWM5MTE4ZmMxMWYiLCJpc3MiOiJodHRwOi8vMTYxLjI3LjE0Ni4xNTo4MTgwL2F1dGgvcmVhbG1zL0dlY29fUmVhbG0iLCJzdWIiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiR2Vjb0xvY2FsaG9zdCIsIm5vbmNlIjoiMC41NTQzMzcxODgzMzE3MjQxIiwic2Vzc2lvbl9zdGF0ZSI6ImVjNzNiODQyLTMwMjAtNGYxNC1hM2UwLTA4MDU4MzM1MGUxNCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo0MjAwIl0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiZmlyc3QgbmFtZSBsYXN0IG5hbWUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwiZ2l2ZW5fbmFtZSI6ImZpcnN0IG5hbWUiLCJmYW1pbHlfbmFtZSI6Imxhc3QgbmFtZSJ9.-EijvywTl0XlHZdNuBZ3pSqN6jClrBncP-EHZ9UDapY");
    }

    @Test
    public void testContextLoads() {
        assertTrue(true);
    }

    @Test
    public void testControllerLoads() throws Exception {
        assertNotNull(controller);
    }



    private List<Map<String, Object>> getCoversWithParameters(Map<String, String> parameters) {
        List<Map<String, Object>> lista = controller.list(parameters, 0L, 10L, "id", "asc", getHeader());
        assertNotNull(lista);
        return lista;
    }

    @Test
    public void testGetCoversValid_IdParameterEmpty(){
        List<Map<String, Object>> lista = getCoversWithParameters(new HashMap<>());
        assertTrue(lista.size() > 0 );
    }


    @Test
    public void testGetCoversValid_IdParameterPresent() {
        List<Map<String, Object>> lista = getCoversWithParameters(Map.of("id", "1"));
        assertTrue(lista.size() > 0 );
    }

    @Test
    public void testGetCoversValid_IdParameterNonPresent() {
        List<Map<String, Object>> lista = getCoversWithParameters(Map.of("id", "1000"));
        assertEquals(0 , lista.size() );
    }

    @Test
    public void testGetCoversNotValid_IdParameterNull() {
        try {
            controller.list(null, 0L, 10L, "id", "asc", getHeader());
        } catch (NullPointerException e) {
            return;
        }
        fail("Eccezione NullPointerException non rilanciata");
    }


    private List<Map<String, Object>> getCovers(Long offset, Long limit , String sort , String direction) {
        return controller.list(new HashMap<>(), offset, limit, sort, direction, getHeader());
    }

    @Test
    public void testGetCoversInvaild_offsetNegative(){
        try {
            getCovers(-1L, 10L, "id", "asc");
        } catch (Exception e) {
            return ;
        }
        fail("Eccezione non rilanciata, offset negativo");
    }

    @Test
    public void testGetCoversInvaild_limitNegative(){
        try {
            getCovers(0L, -1L, "id", "asc");
        } catch (Exception e) {
            return ;
        }
        fail("Eccezione non rilanciata, limit negativo");
    }

    @Test
    public void testGetCoversInvaild_sortNotvalid(){
        try {
            List<Map<String, Object>> elem = getCovers(0L, 10L, "ids", "asc");
            elem.size();
        } catch (Exception e) {
            return ;
        }
        fail("Eccezione non rilanciata, sort id non valido");
    }


    @Test
    public void testGetCoversInvaild_directionNotvalid(){
        try {
            getCovers(0L, 10L, "id", "sca");
        } catch (Exception e) {
            return ;
        }
        fail("Eccezione non rilanciata, direction non valido");
    }


    @Test
    public void testGetCoversIdValid(){
        Map<String, Object> cover = controller.get("1", getHeader());
        assertNotNull(cover);
        assertEquals("1", cover.get("id".toUpperCase()));
    }

    @Test
    public void testGetCoversIdNotValid(){
        try {
            controller.get("-1", getHeader());
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.NOT_FOUND, e.getStatus());
            return;
        }
        fail("Eccezione ResponseStatusException.NOT_FOUND non rilanciata");
    }


    private Map<String, Object> buildBody(String box_id, List<Map<String, Object>> documen_types ){
        HashMap<String, Object > res = new HashMap<>();
        res.put("box_id", box_id);
        res.put("document_types", documen_types);
        return res ;
    }


    @Test
    public void testPutCoversIdValid(){
        Map<String, Object> cover = controller.put("4", buildBody(null, new ArrayList<>()), getHeader());
        assertNotNull(cover);
        assertEquals(buildBody(null, new ArrayList<>()).get("box_id"), cover.get("BOX_ID"));
        assertEquals("4", cover.get("ID"));
    }

    @Test
    public void testPutCoversIdNotValid(){
        try {
            controller.put("A", buildBody(null, new ArrayList<>()), getHeader());
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.NOT_FOUND, e.getStatus());
            return;
        }
        fail("Eccezione ResponseStatusException.NOT_FOUND non rilanciata");
    }

    @Test
    public void testPutCoversIdBodyNull(){
        try {
            controller.put("4", null, getHeader());
        } catch (NullPointerException e) {
            return;
        }
        fail("Eccezione NullPoniterException non rilanciata");
    }


    @Test
    public void testPutCoversIdBodyNotValid(){
        HashMap<String, Object > body = new HashMap<>();
        body.put("box", null);
        body.put("documents", null);
        try {
            controller.put("4", body, getHeader());
        } catch (Exception e) {
            return;
        }
        fail("Eccezione non rilanciata");
    }



    private Map<String, String> buildCover(){
        Map<String, String> cover = new HashMap<>();
        cover.put("dealer_id", "1");
        cover.put("status", "FRONTE.NEW");
        cover.put("username", User.user(getHeader()).name);
        cover.put("created_at", Instant.now().toString());
        cover.put("market", "00");
        cover.put("service_id", "01");
        cover.put("brand_id","00");
        return cover ;
    }

    @Test
    public void testPostCoversValid(){
        Map<String, String> cover = buildCover();
        Map<String, Object> posted = controller.post(cover, getHeader());
        assertNotNull(posted);
        assertNotNull(posted.get("created_at".toUpperCase()));
        assertNotNull(posted.get("id".toUpperCase()) );
        assertEquals("1", posted.get("dealer_id".toUpperCase()) );
        assertEquals("FRONTE.NEW", posted.get("status".toUpperCase()) );
        assertEquals(User.user(getHeader()).name, posted.get("username".toUpperCase()) );
        assertEquals("00", posted.get("market".toUpperCase()) );
        assertEquals("01", posted.get("service_id".toUpperCase()) );
        assertEquals("00", posted.get("brand_id".toUpperCase()) );
    }


    @Test
    public void testPostCoversNotValid_BodyNull(){
        try {
            controller.post(null, getHeader());
        } catch (NullPointerException e) {
            return ;
        }
        fail("NullPointerException non rilanciata per body null ");
    }


    @Test
    public void testPostCoversNotValid_BodyNotValid(){
        //TODO va fatto per ogni campo?
        Map<String, String> cover = new HashMap<>();
        cover.put("dealer", "1");
        cover.put("status", "FRONTE.NEW");
        cover.put("username", User.user(getHeader()).name);
        cover.put("created_at", Instant.now().toString());
        cover.put("market", "00");
        cover.put("service_id", "01");
        cover.put("brand_id","00");
        try {
            controller.post(cover, getHeader());
        } catch (Exception e) {
            return ;
        }
        fail("Exception non rilanciata per body con campi non validi ");
    }


}

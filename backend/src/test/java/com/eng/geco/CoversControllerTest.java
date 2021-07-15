package com.eng.geco;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

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
public class CoversControllerTest extends BaseTest {

    @Autowired
    private CoversController controller;

    @Test
    public void testContextLoads() {
        assertTrue(true);
    }

    @Test
    public void testControllerLoads() throws Exception {
        assertNotNull(controller);
    }

    // TESTs GET /covers

    private List<Map<String, Object>> getCoversWithParameters(Map<String, Object> parameters) {
        return controller.list(parameters, 0L, 10L, "id", "asc");
    }

    @Test
    public void testGetCoversValid_IdParameterEmpty() {
        List<Map<String, Object>> lista = getCoversWithParameters(Map.of());
        assertTrue(lista.size() > 0);
    }

    @Test
    public void testGetCoversValid_ParametersPresent() {
        Map<String, String> params = Map.of("id", "1", "box_id", "1", "market", "1000", "brand_id", "00", "dealer_id",
                "0000011", "username", "first name last name", "service_id", "Rivendita");

        params.entrySet().forEach(e -> {
            List<Map<String, Object>> list = getCoversWithParameters(Map.of(e.getKey(), e.getValue()));
            assertNotNull(list);
            assertTrue(list.size() > 0);
            assertEquals(e.getValue(), list.get(0).get(e.getKey()));
        });
    }

    @Test
    public void testGetCoversValid_ParametersPresent_BoxIdNull() {
        Map<String, Object> params = Map.of("box_id_null", "true");
        List<Map<String, Object>> list = getCoversWithParameters(params);
        assertNotNull(list);
        assertTrue(list.size() > 0);
        assertNotNull(list.get(0).get("id"));
        assertNull(list.get(0).get("box_id"));
    }

    @Test
    public void testGetCoversValid_ParametersPresent_Available() {
        Map<String, Object> params = Map.of("availabe", "true");
        List<Map<String, Object>> list = getCoversWithParameters(params);
        assertNotNull(list);
        assertTrue(list.size() > 0);
        assertNotNull(list.get(0).get("id"));
    }


    @Test
    public void testGetCoversValid_ParametersNotPresent() {
        Map<String, String> params = Map.of("id", "1000000", "box_id", "-1000", "market", "30000", "brand_id", "Fiat",
                "dealer_id", "Pippo", "username", "Pippo", "service_id", "selling");

        params.entrySet().forEach(e -> {
            List<Map<String, Object>> list = getCoversWithParameters(Map.of(e.getKey(), e.getValue()));
            assertNotNull(list);
            assertEquals(0, list.size());
        });
    }

    @Test
    public void testGetCoversNotValid_IdParameterNull() {
        try {
            Map<String, Object> map = null;
            controller.list(map, 0L, 10L, "id", "asc");
        } catch (NullPointerException e) {
            return;
        }
        fail("Eccezione NullPointerException non rilanciata");
    }

    @Test
    public void testGetCoversInvaild_offsetNegative() {
        try {
            controller.list(Map.of(), -1L, 10L, "id", "asc");
        } catch (Exception e) {
            assertEquals("ERROR: OFFSET must not be negative", e.getCause().getMessage());
            return;
        }
        fail("Eccezione non rilanciata, offset negativo");
    }

    @Test
    public void testGetCoversInvaild_limitNegative() {
        try {
            controller.list(Map.of(), 1L, -1L, "id", "asc");
        } catch (Exception e) {
            assertEquals("ERROR: LIMIT must not be negative", e.getCause().getMessage());
            return;
        }
        fail("Eccezione non rilanciata, limit negativo");
    }

    // TESTs GET /covers/id

    @Test
    public void testGetCoversIdValid() {
        Map<String, Object> cover = controller.get("1");
        assertNotNull(cover);
        assertEquals("1", cover.get("id"));
    }

    @Test
    public void testGetCoversIdNotValid() {
        try {
            controller.get("-1");
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.NOT_FOUND, e.getStatus());
            assertEquals("Entity -1 not found", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.NOT_FOUND not thrown");
    }

    // TESTs PUT/covers/id

    private Map<String, Object> buildBody(String box_id, List<String> document_types, String dealer_id,
            String market, String service_id, String brand_id) {
        Map<String, Object> body = new HashMap<>();
        body.put("box_id", box_id);
        body.put("document_types", document_types);
        body.put("dealer_id", dealer_id);
        body.put("market", market);
        body.put("service_id", service_id);
        body.put("brand_id", brand_id);
        return body ;
    }



    private Map<String, Object> buildBodyForPut(String box_id, List<String> document_types) {
        return buildBody(  box_id,document_types, null, null, null, null);
    }


    @Test
    public void testPutCoversIdValid_NoChanges() {
        Map<String, Object> cover = controller.put("4", buildBodyForPut(null, null));
        assertNotNull(cover);
        assertEquals("4", cover.get("id"));
        assertNull(cover.get("box_id"));
        assertEquals(1, ((List<Map<String, Object>>) cover.get("document_types")).size());
    }

    @Test
    public void testPutCoversIdValid_EmptyDocumentTypes() {
        Map<String, Object> cover = controller.put("4", buildBodyForPut(null, new ArrayList<>()));
        assertNotNull(cover);
        assertEquals("4", cover.get("id"));
        assertNull(cover.get("box_id"));
        assertEquals(0, ((List<Map<String, Object>>) cover.get("document_types")).size());
    }

    @Test
    public void testPutCoversIdValid_DcoumentTypesValid() {
        Map<String, Object> cover = controller.put("4", buildBodyForPut(null , List.of("6AJ") ));
        assertNotNull(cover);
        assertEquals("4", cover.get("id"));
        assertEquals(1, ((List<Map<String, Object>>) cover.get("document_types")).size());
        assertEquals("6AJ", ((List<Map<String, Object>>) cover.get("document_types")).get(0).get("id") );
    }

    @Test
    public void testPutCoversIdValid_BoxIdValid() {
        Map<String, Object> cover = controller.put("4", buildBodyForPut("1" , null ));
        assertNotNull(cover);
        assertEquals("4", cover.get("id"));
        assertEquals("1", cover.get("box_id"));
        assertTrue( ((List<Map<String, Object>>) cover.get("document_types")).size() > 0 );
    }

    @Test
    public void testPutCoversIdValid_validAndPresentBody() {
        Map<String, Object> cover = controller.put("4", buildBodyForPut("1" , List.of("6AJ") ));
        assertNotNull(cover);
        assertEquals("4", cover.get("id"));
        assertEquals("1", cover.get("box_id"));
        assertEquals(1, ((List<Map<String, Object>>) cover.get("document_types")).size());
        assertEquals("6AJ", ((List<Map<String, Object>>) cover.get("document_types")).get(0).get("id") );
    }


    @Test
    public void testPutCoversIdNotValid_InvalidId(){
        try {
            controller.put("-1", buildBodyForPut(null , null ));
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.NOT_FOUND, e.getStatus());
            assertEquals("Entity -1 not found", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.NOT_FOUND not thrown");
    }

    @Test
    public void testPutCoversIdNotValid_BodyNull() {
        try {
            controller.put("4", null);
        } catch (NullPointerException e) {
            return;
        }
        fail("Excewption NullPoniterException not thrown");
    }



    @Test
    public void testPutCoversIdNotValid_IdBoxNotValid() {
        try {
           controller.put("4", buildBodyForPut("-11" , List.of("6AJ") ));
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("404 NOT_FOUND \"Entity -11 not found\"", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.NOT_FOUND not thrown");
    }


    @Test
    public void testPutCoversIdNotValid_DocumentTypesNotValid() {
        try {
           controller.put("4", buildBodyForPut( null , List.of("6AJ", "PIPPO", "9AC") ));
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("document_types list has not valid items", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.NOT_FOUND not thrown");
    }




    // TESTs POST /covers

    private Map<String, Object> buildBodyForPost(String dealer_id, String market, String service_id, String brand_id) {
        return buildBody(null, null, dealer_id, market, service_id, brand_id);
    }

    @Test
    public void testPostCoversValid_BodyValid() {
       Map<String, Object> cover = controller.post(buildBodyForPost( "0000011", "1000", "Rivendita", "00" ) );
       assertNotNull(cover);
       assertNotNull(cover.get("id"));
       assertNull(cover.get("box_id"));
       assertNull(cover.get("document_types"));
       assertEquals("0000011", cover.get("dealer_id"));
       assertEquals("1000", cover.get("market"));
       assertEquals("Rivendita", cover.get("service_id"));
       assertEquals("00", cover.get("brand_id"));
       //cleanup(cover.get("id").toString(), controller);
    }

    @Test
    public void  testPostCoversNotValid_BodyNull() {
        try {
            controller.post(null);
        } catch (Exception e) {
            return ;
        }
        fail("NullPointeException not thrown");
    }


    @Test
    public void testPostCoversNotValid_BodyInvalid_MarketNnotValid() {
        Map<String, Object> body = buildBodyForPost("0000011", "market", "Rivendita", "00");
        try {
            controller.post( body );
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("market does not exist", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }

    @Test
    public void testPostCoversNotValid_BodyInvalid_MarketNull() {
        Map<String, Object> body = buildBodyForPost("0000011", null, "Rivendita", "00");
        try {
            controller.post( body );
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("market does not exist", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }

    @Test
    public void testPostCoversNotValid_BodyNull_ServiceNnotValid() {
         Map<String, Object> body = buildBodyForPost("0000011", "1000", "service", "00");
        try {
            controller.post( body );
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("service_id does not exist", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }
    @Test
    public void testPostCoversNotValid_BodyNull_ServiceNull() {
         Map<String, Object> body = buildBodyForPost("0000011", "1000", null, "00");
        try {
            controller.post( body );
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("service_id does not exist", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }

    @Test
    public void testPostCoversNotValid_BodyNull_DealerNotValid() {
         Map<String, Object> body = buildBodyForPost("dealer", "1000", "Rivendita", "00");
        try {
            controller.post( body );
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("dealer_id does not exist", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }

    @Test
    public void testPostCoversNotValid_BodyNull_DealerNull() {
         Map<String, Object> body = buildBodyForPost("dealer", "1000", null, "00");
        try {
            controller.post( body );
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("dealer_id does not exist", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }

    @Test
    public void testPostCoversNotValid_BodyNull_BrandNotValid() {
         Map<String, Object> body = buildBodyForPost("0000011", "1000", "Rivendita", "brand");
        try {
            controller.post( body );
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("brand_id does not exist", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }

    @Test
    public void testPostCoversNotValid_BodyNull_BrandNull() {
         Map<String, Object> body = buildBodyForPost("0000011", "1000", "Rivendita", null);
        try {
            controller.post( body );
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("brand_id does not exist", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }




}

package com.eng.geco;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

import java.util.List;
import java.util.Map;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.server.ResponseStatusException;


@SpringBootTest
public class BoxesControllerTest extends BaseTest {


    @Autowired
    BoxesController controller ;



    @Test
    public void testContextLoads() {
        assertTrue(true);
    }


    @Test
    public void testControllerLoads(){
        assertNotNull(controller);
    }


    //TESTs GET /boxes

    @Test
    public void testGetBoxesValid_NoParameters(){
        List<Map<String,Object>> list = controller.list( Map.of() , 0L, 10L, "id", "asc");
        assertNotNull(list);
        assertTrue(list.size() > 0 );
        assertNotNull( list.get(0).get("id") );
    }


    private List<Map<String,Object>> testGetBoxes_parametersPresent( Map<String, Object> parameters ){
        return controller.list( parameters , 0L, 10L, "id", "asc");
    }

    private List<Map<String,Object>> testGetBoxes_parametersPresent( MultiValueMap<String, Object> parameters ){
        return controller.list( parameters , 0L, 10L, "id", "asc");
    }

    @Test
    public void testGetBoxesValid_ParametersPresent() {

        Map<String , String > params = Map.of(  "id", "1",
                                                "status", "SCATOLA.SCAN",
                                                "created_at", "2021-02-17T00:01:51+0000",
                                                "username", "first name "
                                            );
        params.entrySet().forEach(
            e  -> {
                List<Map<String,Object>> list = testGetBoxes_parametersPresent(Map.of(e.getKey(), e.getValue()));
                assertNotNull(list);
                assertTrue(list.size() > 0 );
                assertTrue( ((String) list.get(0).get(e.getKey())).contains(e.getValue()) );
            }
        );
    }

    @Test
    public void testGetBoxesValid_ParametersNotPresent() {

        Map<String , String > params = Map.of(  "id", "10000",
                                                "status", " SCANSIONE",
                                                "created_at", "2051-02-17T00:01:51+0000",
                                                "username", "pippo"
                                            );
        params.entrySet().forEach(
            e  -> {
                List<Map<String,Object>> list = testGetBoxes_parametersPresent(Map.of(e.getKey(), e.getValue()));
                 assertNotNull(list);
                assertEquals( 0 , list.size() );
             }
        );
    }


    @Test
    public void testGetBoxesNotValid_IdParameterNotNumeric(){
        try {
            MultiValueMap<String, Object> map =   new LinkedMultiValueMap<String,Object>();
        map.add("id", "a");
            testGetBoxes_parametersPresent( map );
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("Id must be numeric", e.getReason());
            return ;
        }
        fail("Exception not thronw");
    }

    @Test
    public void testGetBoxesValid_MultiValueMapStatusParam(){
        MultiValueMap<String, Object> map =   new LinkedMultiValueMap<String,Object>();
        map.addAll("status", List.of("SCATOLA.SCAN", "SCATOLA.NEW"));
        List<Map<String,Object>> list = controller.list( map , 0L, 10L, "id", "asc");
        List<Map<String,Object>> listSingleParam = controller.list( Map.of("status","SCATOLA.SCAN" ) , 0L, 10L, "id", "asc");
        assertNotNull(list);
        assertNotNull(listSingleParam);
        assertTrue(list.size() > 0 );
        assertTrue(listSingleParam.size() > 0 );
        assertNotNull( list.get(0).get("id") );
        assertNotNull( listSingleParam.get(0).get("id") );
        assertTrue(list.size() >= listSingleParam.size() );
    }

    @Test
    public void testGetBoxesValid_MultiValueMapStatusParamWrong(){
        MultiValueMap<String, Object> map =   new LinkedMultiValueMap<String,Object>();
        map.addAll("status", List.of("SCATOLA.SCAN", "SCATOLA.NUOVA"));
        List<Map<String,Object>> list = controller.list( map , 0L, 10L, "id", "asc");
        List<Map<String,Object>> listSingleParam = controller.list( Map.of("status","SCATOLA.SCAN" ) , 0L, 10L, "id", "asc");
        assertNotNull(list);
        assertNotNull(listSingleParam);
        assertTrue(list.size() > 0 );
        assertTrue(listSingleParam.size() > 0 );
        assertNotNull( list.get(0).get("id") );
        assertNotNull( listSingleParam.get(0).get("id") );
        assertEquals(list.size() , listSingleParam.size());
    }


    @Test
    public void testGetBoxesNotValid_IdParameterNull(){
        try {
            Map<String, Object> map = null ;
            controller.list(map, 0L, 10L, "id", "asc" );
        } catch (NullPointerException e) {
            return;
        }
        fail("Eccezione NullPointerException non rilanciata");
    }

    @Test
    public void testGetBoxesInvaild_offsetNegative(){
        try {
             controller.list( Map.of(), -1L, 10L, "id", "asc");
        } catch (Exception e) {
            assertEquals("ERROR: OFFSET must not be negative", e.getCause().getMessage());
            return ;
        }
        fail("Eccezione non rilanciata, offset negativo");
    }

    @Test
    public void testGetBoxesInvaild_limitNegative(){
        try {
            controller.list( Map.of(), 1L, -1L, "id", "asc");
        } catch (Exception e) {
            assertEquals("ERROR: LIMIT must not be negative", e.getCause().getMessage());
            return ;
        }
        fail("Eccezione non rilanciata, limit negativo");
    }


    //TESTs GET /boxes/id

    @Test
    public void testGetBoxIdValid(){
        Map<String, Object> box = controller.get("1");
        assertNotNull(box);
        assertEquals("1", box.get("id").toString());
    }

    @Test
    public void testGetBoxIdNotValid(){
        try {
            controller.get("-1");
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.NOT_FOUND, e.getStatus());
            assertEquals("Entity -1 not found", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.NOT_FOUND not thrown");
    }


    //TESTs PUT /boxes/id

    @Test
    public void testPutBoxIdValid_IdAndBodyValid(){
        Map<String, Object> body = Map.of("status", "SCATOLA.SCAN");
        Map<String, Object> box = controller.put("1", body);
        assertNotNull(box);
        assertEquals("1", box.get("id"));
        assertNotNull(box.get("history"));
        assertEquals("SCATOLA.SCAN", box.get("status"));
    }

    @Test
    public void testPutBoxIdNotValid_IdNotValid(){
        Map<String, Object> body = Map.of("status", "SCATOLA.RICEVUTA");
        try {
            controller.put("1000000", body);
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.NOT_FOUND, e.getStatus());
            assertEquals("Entity 1000000 not found", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.NOT_FOUND not thrown");
    }

    @Test
    public void testPutBoxIdNotValid_BodyNotValid_statusNotExist(){
        Map<String, Object> body = Map.of("status", "SCATOLA.");
        try {
            controller.put("1", body);
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("status does not exist", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }

    @Test
    public void testPutBoxIdNotValid_BodyNotValid_statusNotValid(){
        Map<String, Object> body = Map.of("status", "SCATOLA.NEW");
        try {
            controller.put("1", body);
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("status not valid", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }

    @Test
    public void testPutBoxIdValid_InitHistory(){
        Map<String, Object> box = controller.post(Map.of());
        assertNotNull(box.get("id"));
        assertNull(box.get("history"));
        Map<String, Object> body = Map.of("status", "SCATOLA.DAINVIARE");
        Map<String, Object> updated_box = controller.put(box.get("id").toString(), body);
        assertNotNull(updated_box.get("history"));
    }

    //TESTs POST /boxes

    @Test
    public void testPostBoxesValid(){
        Map<String, Object> box = controller.post(Map.of());
        assertNotNull(box.get("id"));
        assertNotNull(box.get("created_at"));
        assertNotNull(box.get("username"));
        assertEquals("SCATOLA.NEW", box.get("status"));
        //cleanup( box.get("id").toString() , controller );
    }



}

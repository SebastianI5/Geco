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
public class DealersControllerTest  extends BaseTest{

	@Autowired
    private DealersController controller;

    @Test
    public void testContextLoads() {
        assertTrue(true);
    }

    @Test
    public void testControllerLoads() {
        assertNotNull(controller);
    }

    private List<Map<String, Object>> getDealersWithParameters( Map<String, Object> parameters ) {
        return controller.list(parameters, 0L, 10L, "id", "asc");
    }


    @Test
    public void testGetDealersValid_ParametersEmpty(){
        List<Map<String, Object>> list = getDealersWithParameters(Map.of());
        assertNotNull(list);
        assertTrue(list.size() > 0 );
        assertNotNull( list.get(0).get("id") );
    }


    @Test
    public void testGetDealersValid_EqualParameters_Present(){

        Map<String, String> params = Map.of("id", "0036601", "fake", "N", "vatcode", "10983490011");
        params.entrySet().forEach(e -> {
            List<Map<String, Object>> list = getDealersWithParameters(Map.of(e.getKey(), e.getValue()));
            assertNotNull(list);
            assertTrue(list.size() > 0);
            assertEquals(e.getValue(), list.get(0).get(e.getKey()));
        });
    }


    @Test
    public void testGetDealersValid_EqualParameters_NotPresent(){

        Map<String, String> params = Map.of("id", "003660q", "fake", "No", "vatcode", "109834900");
        params.entrySet().forEach(e -> {
            List<Map<String, Object>> list = getDealersWithParameters(Map.of(e.getKey(), e.getValue()));
            assertNotNull(list);
            assertEquals( 0, list.size() );
        });
    }


    @Test
    public void testGetDealersValid_LikeParameters_Present(){
        Map<String, String> params = Map.of( "id", "00366", "description",  "FGA" );
        Map<String, String> resultmap = Map.of( "id" , "id" , "description", "description");
        params.entrySet().forEach(e -> {
            List<Map<String, Object>> list = getDealersWithParameters( Map.of( "id_like", e.getValue() ) );
            assertNotNull(list);
            assertTrue(list.size() > 0);
            String resultFirstEntryKeyOf = list.get(0).get(resultmap.get(e.getKey())).toString();
            assertTrue( resultFirstEntryKeyOf.contains(e.getValue()) );
        });
    }


    @Test
    public void testGetDealersValid_LikeParameters_NotPresent(){
        Map<String, String> params = Map.of( "id", "Pippo", "description",  "Pluto" );
        params.entrySet().forEach(e -> {
            List<Map<String, Object>> list = getDealersWithParameters( Map.of( "id_like", e.getValue() ) );
            assertNotNull(list);
            assertEquals(0 , list.size() );
        });
    }



    @Test
    public void testGetDealersValid_InParameters_Present(){

        MultiValueMap<String, Object> map =   new LinkedMultiValueMap<String,Object>();
        map.addAll("status", List.of("1", "8"));
        MultiValueMap<String, Object> singleParamMap = new LinkedMultiValueMap<String,Object>();
        singleParamMap.addAll("status", List.of("1"));
        List<Map<String,Object>> list = controller.list( map , 0L, 10L, "id", "asc");
        List<Map<String,Object>> listSingleParam = controller.list( singleParamMap , 0L, 10L, "id", "asc");
        assertNotNull(list);
        assertNotNull( listSingleParam);
        assertTrue( list.size() > 0 );
        assertTrue( listSingleParam.size() > 0 );
        assertNotNull( list.get(0).get("status") );
        assertNotNull( listSingleParam.get(0).get("status") );
        assertTrue( list.size() >= listSingleParam.size() );


    }


    @Test
    public void testGetDealersValid_InParameters_NotPresent(){

        MultiValueMap<String, Object> map =   new LinkedMultiValueMap<String,Object>();
        map.addAll("status", List.of("pippo", "pluto"));
        List<Map<String,Object>> list = controller.list( map , 0L, 10L, "id", "asc");
        assertNotNull(list);
        assertEquals( 0, list.size()  );
    }


    @Test
    public void testGetDealersValid_InParameters_OnePresentOneNot(){
        MultiValueMap<String, Object> map =   new LinkedMultiValueMap<String,Object>();
        map.addAll("status", List.of("1", "8"));
        MultiValueMap<String, Object> singleParamMap =   new LinkedMultiValueMap<String,Object>();
        map.addAll("status", List.of("1"));
        List<Map<String,Object>> list = controller.list( map , 0L, 10L, "id", "asc");
        List<Map<String,Object>> listSingleParam = controller.list( singleParamMap , 0L, 10L, "id", "asc");
        assertNotNull(list);
        assertNotNull( listSingleParam);
        assertTrue( list.size() > 0 );
        assertTrue( listSingleParam.size() > 0 );
        assertNotNull( list.get(0).get("status") );
        assertNotNull( listSingleParam.get(0).get("status") );
        assertEquals( list.size() , listSingleParam.size() );
    }

    //particular cases QueryConditions

    @Test
    public void testGetDealersValid_idPecNotNull(){
        List<Map<String, Object>> list = getDealersWithParameters(Map.of("idpec_not_null", "true"));
        assertNotNull(list);
        assertTrue(list.size() > 0 );
        assertNotNull( list.get(0).get("idpec") );
    }

    @Test
    public void testGetDealersValid_idPecNull(){
        List<Map<String, Object>> list = getDealersWithParameters(Map.of("idpec_null", "true"));
        assertNotNull(list);
        assertTrue(list.size() > 0 );
        assertNull( list.get(0).get("idpec") );
    }

    //TESTs su GET /dealers/id
    @Test
    public void testGetDealerValid_idPresent(){
    	Map<String, Object> dealer = controller.get("0076729");
        assertNotNull(dealer);
        assertEquals("0076729", dealer.get("id").toString());
    }

    @Test
    public void testGetDealerValid_idNotPresent(){
        try {
            controller.get("-1");
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.NOT_FOUND, e.getStatus());
            assertEquals("Entity -1 not found", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.NOT_FOUND not thrown");
    }


}

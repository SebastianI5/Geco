package com.eng.geco;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.server.ResponseStatusException;

@SpringBootTest
public class ContractsControllerTest extends BaseTest {

    @Autowired
    private ContractsController controller;

    @Test
    public void testContextLoads() {
        assertTrue(true);
    }

    @Test
    public void testControllerLoads() {
        assertNotNull(controller);
    }

    private List<Map<String, Object>> getContractsWithParameters(Map<String, Object> parameters) {
        List<Map<String, Object>> lista = controller.list(parameters, 0L, 10L, "id", "asc");
        assertNotNull(lista);
        return lista;
    }

    @Test
    public void testGetContractsValid_NoParameters() {
        List<Map<String, Object>> list = getContractsWithParameters(Map.of());
        assertNotNull(list);
        assertTrue(list.size() > 0);
        assertNotNull(list.get(0).get("id"));
    }

    @Test
    public void testGetCotractsValid_EqualParametersPresent() {
        Map<String, String> params = Map.of("id", "4995", "dealer_id", "0025509");
        params.entrySet().forEach(e -> {
            List<Map<String, Object>> list = getContractsWithParameters(Map.of(e.getKey(), e.getValue()));
            assertNotNull(list);
            assertTrue(list.size() > 0);
            assertEquals(e.getValue(), list.get(0).get(e.getKey()));
        });
    }

    @Test
    public void testGetCotractsValid_EqualParameters_NotPresent() {
        Map<String, String> params = Map.of("id", "4995xxx", "dealer_id", " 0025509xxx");
        params.entrySet().forEach(e -> {
            List<Map<String, Object>> list = getContractsWithParameters(Map.of(e.getKey(), e.getValue()));
            assertNotNull(list);
            assertEquals(0, list.size());
        });
    }

    @Test
    public void testGetContractsValid_LikeParameters_Present(){

        Map<String, String> params = Map.of("id_like", "499", "dealer_id", "MIRAFIOR");
        Map<String, String> resultmap = Map.of("id_like","id", "dealer_id", "description");
        params.entrySet().forEach(e -> {
            List<Map<String, Object>> list = getContractsWithParameters( Map.of( e.getKey(), e.getValue() ) );
            assertNotNull(list);
            assertTrue(list.size() > 0);
            String resultFirstEntryKeyValue = list.get(0).get(resultmap.get(e.getKey())).toString();
            assertTrue( resultFirstEntryKeyValue.contains(e.getValue()) );
        });
    }

    @Test
    public void testGetContractsValid_LikeParameters_NotPresent(){
        Map<String, String> params = Map.of("id_like", "pippo", "dealer_id", "A!?!");
        params.entrySet().forEach(e -> {
            List<Map<String, Object>> list = getContractsWithParameters( Map.of( e.getKey(), e.getValue() ) );
            assertNotNull(list);
            assertEquals(0 , list.size() );
        });
    }


    @Test
    public void testGetContractsValid_ServiceIdInParameters_Present(){
        MultiValueMap<String, Object> map =   new LinkedMultiValueMap<String,Object>();
        map.addAll("service_id", List.of("Rivendita", "OOAA"));
        MultiValueMap<String, Object> singleParamMap =   new LinkedMultiValueMap<String,Object>();
        singleParamMap.addAll("service_id", List.of("Rivendita"));
        List<Map<String,Object>> list = controller.list( map , 0L, 10L, "id", "asc");
        List<Map<String,Object>> listSingleParam = controller.list( singleParamMap , 0L, 10L, "id", "asc");
        assertNotNull(list);
        assertNotNull( listSingleParam);
        assertTrue( list.size() > 0 );
        assertTrue( listSingleParam.size() > 0 );
        assertNotNull( list.get(0).get("service_id") );
        assertNotNull( listSingleParam.get(0).get("service_id") );
        assertTrue( list.size() >= listSingleParam.size() );
    }

    @Test
    public void testGetContractsValid_ServiceIdInParameters_NotPresent(){

        MultiValueMap<String, Object> map =   new LinkedMultiValueMap<String,Object>();
        map.addAll("service_id", List.of("Riv", "OO00Q"));
        List<Map<String,Object>> list = controller.list( map , 0L, 10L, "id", "asc");
        assertNotNull(list);
        assertEquals( 0, list.size()  );
    }


    @Test
    public void testGetContractsValid_ServiceIdInParameters_OnePresentOneNot(){
        MultiValueMap<String, Object> map =   new LinkedMultiValueMap<String,Object>();
        map.addAll("service_id", List.of("Rivendita", "OOQ"));
        MultiValueMap<String, Object> singleParamMap =   new LinkedMultiValueMap<String,Object>();
        map.addAll("service_id", List.of("Rivendita"));
        List<Map<String,Object>> list = controller.list( map , 0L, 10L, "id", "asc");
        List<Map<String,Object>> listSingleParam = controller.list( singleParamMap , 0L, 10L, "id", "asc");
        assertNotNull(list);
        assertNotNull( listSingleParam);
        assertTrue( list.size() > 0 );
        assertTrue( listSingleParam.size() > 0 );
        assertNotNull( list.get(0).get("service_id") );
        assertNotNull( listSingleParam.get(0).get("service_id") );
        assertEquals( list.size() , listSingleParam.size() );
    }



    @Test
    public void testGetContractsValid_BrandIdInParameters_Present(){

        MultiValueMap<String, Object> map =   new LinkedMultiValueMap<String,Object>();
        map.addAll("brand_id", List.of("00", "77"));
        List<Map<String,Object>> list = controller.list( map , 0L, 10L, "id", "asc");
        List<Map<String,Object>> listSingleParam = controller.list( Map.of("brand_id" , "00") , 0L, 10L, "id", "asc");
        assertNotNull(list);
        assertNotNull( listSingleParam);
        assertTrue( list.size() > 0 );
        assertTrue( listSingleParam.size() > 0 );
        assertNotNull( list.get(0).get("brand_id") );
        assertNotNull( listSingleParam.get(0).get("brand_id") );
        assertTrue( list.size() >= listSingleParam.size() );
    }

    @Test
    public void testGetContractsValid_BrandIdInParameters_NotPresent(){
        MultiValueMap<String, Object> map =   new LinkedMultiValueMap<String,Object>();
        map.addAll("brand_id", List.of("1o", "7"));
        List<Map<String,Object>> list = controller.list( map , 0L, 10L, "id", "asc");
         assertNotNull(list);
         assertEquals( 0 ,list.size() );

    }

    @Test
    public void testGetContractsValid_BrandIdInParameters_OnePresentOneNot(){

        MultiValueMap<String, Object> map =   new LinkedMultiValueMap<String,Object>();
        map.addAll("brand_id", List.of("00", "7"));
        List<Map<String,Object>> list = controller.list( map , 0L, 10L, "id", "asc");
        List<Map<String,Object>> listSingleParam = controller.list( Map.of("brand_id" , "00") , 0L, 10L, "id", "asc");
        assertNotNull(list);
        assertNotNull( listSingleParam);
        assertTrue( list.size() > 0 );
        assertTrue( listSingleParam.size() > 0 );
        assertNotNull( list.get(0).get("brand_id") );
        assertNotNull( listSingleParam.get(0).get("brand_id") );
        assertEquals( list.size() , listSingleParam.size() );
    }

    @Test
    public void testGetContractsNotValid_ParametersNull(){
        try {
            Map<String, Object> map = null ;
            controller.list(map, 0L, 10L, "id", "asc" );
        } catch (NullPointerException e) {
            return;
        }
        fail("Eccezione NullPointerException non rilanciata");
    }

    @Test
    public void testGetContractsNotVaild_offsetNegative() {
        try {
            controller.list( Map.of(), -1L, 10L, "id", "asc");
       } catch (Exception e) {
           assertEquals("ERROR: OFFSET must not be negative", e.getCause().getMessage());
           return ;
       }
       fail("Eccezione non rilanciata, offset negativo");
    }

    @Test
    public void testGetContractsNotVaild_limitNegative() {
        try {
            controller.list( Map.of(), 1L, -1L, "id", "asc");
        } catch (Exception e) {
            assertEquals("ERROR: LIMIT must not be negative", e.getCause().getMessage());
            return ;
        }
        fail("Eccezione non rilanciata, limit negativo");
    }


    //TESTs get Pdf

    @Test
    public void testGetPdfValid() throws IOException {
        HttpServletResponse response = new MockHttpServletResponse();
        controller.download("10003", "9CA", "2019-07-17T00:00:00", response);
        assertTrue(true);
    }

    @Test
    public void testGetPdfNotValid_IdNotExist() throws IOException {
        HttpServletResponse response = new MockHttpServletResponse();
        try {
            controller.download("1000", "9CA", "2019-07-17T00:00:00", response);
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.NOT_FOUND, e.getStatus());
            assertEquals("Entity 1000 not found", e.getReason());
            return ;
        }
        fail("Exception not thorwn");
    }

    @Test
    public void testGetPdfValid_DocumentTypeNotValid() throws IOException {
        HttpServletResponse response = new MockHttpServletResponse();
        try {
            controller.download("10003", "9C9", "2019-07-17T00:00:00", response);
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.NOT_FOUND, e.getStatus());
            assertEquals("Document Type does not exist", e.getReason());
            return ;
        }
        fail("Exception not thorwn");
    }

    @Test
    public void testGetPdfValid_VersionCreatedAtNotValid() throws IOException {
        HttpServletResponse response = new MockHttpServletResponse();
        try {
            controller.download("10003", "9CA", "2019-07-17", response);
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.NOT_FOUND, e.getStatus());
            assertEquals("Version created_at does not exist", e.getReason());
            return ;
        }
        fail("Exception not thorwn");
    }


}

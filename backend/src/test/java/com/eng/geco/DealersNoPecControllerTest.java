package com.eng.geco;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

@SpringBootTest
public class DealersNoPecControllerTest extends BaseTest{
	
	@Autowired
    private DealersNoPecController controller;

    @Test
    public void testContextLoads() {
        assertTrue(true);
    }

    @Test
    public void testControllerLoads() {
        assertNotNull(controller);
    }
    
    private List<Map<String, Object>> getDealersNoPecWithParameters( Map<String, Object> parameters ) {
        return controller.list(parameters, 0L, 10L, "id", "asc");
    }
	
	//dealer_id -> 4 test alla fine
	//brand_id -> 3 test
	//vat code -> 
	
	
    @Test
    public void testGetDealersNoPec_LikeParameters_id_Present(){

        Map<String, Object> params = Map.of("dealer_id", "499");
        List<Map<String, Object>> list = getDealersNoPecWithParameters(params);
        assertNotNull(list);
        assertTrue(list.size() > 0);
    }
    
    @Test
    public void testGetDealersNoPec_LikeParameters_description_Present(){

        Map<String, Object> params = Map.of("dealer_id", "MIRAF");
        List<Map<String, Object>> list = getDealersNoPecWithParameters(params);
        assertNotNull(list);
        assertTrue(list.size() > 0);
    }
    @Test
    public void testGetDealersNoPec_vatcode_Present(){

        Map<String, Object> params = Map.of("vatcode", "354");
        List<Map<String, Object>> list = getDealersNoPecWithParameters(params);
        assertNotNull(list);
        assertTrue(list.size() > 0);
    }
    
    @Test
    public void testGetDealersNoPec_LikeParameters_id_NotPresent(){

        Map<String, Object> params = Map.of("dealer_id", "9999");
        List<Map<String, Object>> list = getDealersNoPecWithParameters(params);
        assertNotNull(list);
        assertEquals( 0 , list.size() );
    }
    
    @Test
    public void testGetDealersNoPec_LikeParameters_description_NotPresent(){

        Map<String, Object> params = Map.of("dealer_id", "zzz");
        List<Map<String, Object>> list = getDealersNoPecWithParameters(params);
        assertNotNull(list);
        assertEquals( 0 , list.size() );
    }
    
    @Test
    public void testGetDealersNoPec_vatcode_NotPresent(){

        Map<String, Object> params = Map.of("vatcode", "9999");
        List<Map<String, Object>> list = getDealersNoPecWithParameters(params);
        assertNotNull(list);
        assertEquals( 0 , list.size() );
    }
    
    
    @Test
    public void testGetDealersNoPec_BrandIdInParameters_Present(){
        MultiValueMap<String, Object> map =   new LinkedMultiValueMap<String,Object>();
        map.addAll("brand_id", List.of("00", "70"));
        MultiValueMap<String, Object> singleParamMap =   new LinkedMultiValueMap<String,Object>();
        singleParamMap.addAll("brand_id", List.of("00"));
        List<Map<String,Object>> list = controller.list( map , 0L, 10L, "id", "asc");
        List<Map<String,Object>> listSingleParam = controller.list( singleParamMap , 0L, 10L, "id", "asc");
        assertNotNull(list);
        assertNotNull( listSingleParam);
        assertTrue( list.size() > 0 );
        assertTrue( listSingleParam.size() > 0 );
        assertNotNull( list.get(0).get("brand_id") );
        assertNotNull( listSingleParam.get(0).get("brand_id") );
        assertTrue( list.size() >= listSingleParam.size() );
    }

    @Test
    public void testGetDealersNoPec_BrandIdInParameters_NotPresent(){

        MultiValueMap<String, Object> map =   new LinkedMultiValueMap<String,Object>();
        map.addAll("brand_id", List.of("as", "zo"));
        List<Map<String,Object>> list = controller.list( map , 0L, 10L, "id", "asc");
        assertNotNull(list);
        assertEquals( 0, list.size()  );
    }


    @Test
    public void testGetDealersNoPec_BrandIdInParameters_OnePresentOneNot(){
        MultiValueMap<String, Object> map =   new LinkedMultiValueMap<String,Object>();
        map.addAll("brand_id", List.of("00", "8888"));
        MultiValueMap<String, Object> singleParamMap =   new LinkedMultiValueMap<String,Object>();
        map.addAll("brand_id", List.of("00"));
        List<Map<String,Object>> list = controller.list( map , 0L, 10L, "id", "asc");
        List<Map<String,Object>> listSingleParam = controller.list( singleParamMap , 0L, 10L, "id", "asc");
        assertNotNull(list);
        assertNotNull( listSingleParam);
        assertTrue( list.size() > 0 );
        assertTrue( listSingleParam.size() > 0 );
        assertNotNull( list.get(0).get("brand_id") );
        assertNotNull( listSingleParam.get(0).get("brand_id") );
        assertEquals( list.size() , listSingleParam.size() );
    }

}

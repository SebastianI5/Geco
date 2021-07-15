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
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.server.ResponseStatusException;

@SpringBootTest
public class DocumentTypesControllerTest extends BaseTest {

    @Autowired
    private DocumentTypesController controller;

    private List<Map<String, Object>> getDocTypesWithParameters(Map<String, Object> parameters) {
        return controller.list(parameters, 0L, 10L, "id", "asc");
    }

    @Test
    public void testGetDocTypesValid_NoParameters() {
        Map<String, Object> parameters = new HashMap<>();
        List<Map<String, Object>> lista = getDocTypesWithParameters(parameters);
        assertNotNull(lista);
        assertTrue(lista.size() > 0);
    }

    @Test
    public void testGetDocumentTypesValid_ParametersPresent() {
        Map<String, String> params = Map.of("id", "9AF", "mandatory", "1");

        params.entrySet().forEach(e -> {
            List<Map<String, Object>> list = getDocTypesWithParameters(Map.of(e.getKey(), e.getValue()));
            assertNotNull(list);
            assertTrue(list.size() > 0);
            assertEquals(e.getValue(), list.get(0).get(e.getKey()));
        });
    }

    @Test
    public void testGetDocumentTypesValid_ParametersNotPresent() {
        Map<String, String> params = Map.of("id", "-1", "mandatory", "-1000");
        params.entrySet().forEach(e -> {
            List<Map<String, Object>> list = getDocTypesWithParameters(Map.of(e.getKey(), e.getValue()));
            assertNotNull(list);
            assertEquals(0, list.size());
        });
    }

    @Test
    public void testGetDocumentTypesValid_ServiceIdInParamenter_present() {
        MultiValueMap<String, Object> map = new LinkedMultiValueMap<String, Object>();
        map.addAll("service_id", List.of("Rivendita"));
        List<Map<String, Object>> list = controller.list(map, 0L, 10L, "id", "asc");
        assertNotNull(list);
        assertTrue(list.size() > 0);
        assertNotNull(list.get(0).get("services"));
        List<String> l = (List<String>) list.get(0).get("services")  ;
        assertTrue(  l.contains("Rivendita") );
    }

    @Test
    public void testGetDocumentTypesValid_ServiceIdInParamenter_NotPresent() {
        MultiValueMap<String, Object> map = new LinkedMultiValueMap<String, Object>();
        map.addAll("service_id", List.of("Riv"));
        List<Map<String, Object>> list = controller.list(map, 0L, 10L, "id", "assc");
        assertNotNull(list);
        assertEquals(0, list.size());
    }

    @Test
    public void testGetDocumentTypesNotValid_ServiceIdInParamenter () {
         try {
            MultiValueMap<String, Object> map = new LinkedMultiValueMap<String, Object>();
            map.addAll("service_id", List.of("Rivendita", "assistenza"));
             controller.list(map, 0L, 10L, "id", "asc");
         } catch ( ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("Multiples service_id provided, only one required", e.getReason() );
            return ;
         }
         fail("Eccezione non rilanciata");
    }

    @Test
    public void testGetDocumentTypesValid_ExistingInParameter_Present() {
        MultiValueMap<String, Object> map = new LinkedMultiValueMap<String, Object>();
        map.addAll("existing", List.of("9AF", "NGM"));
        MultiValueMap<String, Object> singleParamMap = new LinkedMultiValueMap<String, Object>();
        singleParamMap.addAll("existing", List.of("9AF"));
        List<Map<String, Object>> list = controller.list(map, 0L, 10L, "id", "asc");
        List<Map<String, Object>> listSingleParam = controller.list(singleParamMap, 0L, 10L, "id", "asc");
        assertNotNull(list);
        assertNotNull(listSingleParam);
        assertTrue(list.size() > 0);
        assertTrue(listSingleParam.size() > 0);
        assertNotNull(list.get(0).get("id"));
        assertNotNull(listSingleParam.get(0).get("id"));
        assertEquals(Integer.parseInt(list.get(0).get("record_count").toString()),
                Integer.parseInt(listSingleParam.get(0).get("record_count").toString()) - 1);
    }

    @Test
    public void testGetDocumentTypesValid_ExistingInParameter_NotPresent() {
        MultiValueMap<String, Object> map = new LinkedMultiValueMap<String, Object>();
        map.addAll("existing", List.of("Pippo", "Pluto"));
        MultiValueMap<String, Object> singleParamMap = new LinkedMultiValueMap<String, Object>();
        List<Map<String, Object>> list = controller.list(map, 0L, 10L, "id", "asc");
        List<Map<String, Object>> listSingleParam = controller.list(singleParamMap, 0L, 10L, "id", "asc");
        assertNotNull(list);
        assertNotNull(listSingleParam);
        assertTrue(list.size() > 0);
        assertTrue(listSingleParam.size() > 0);
        assertNotNull(list.get(0).get("id"));
        assertNotNull(listSingleParam.get(0).get("id"));
        assertEquals(list.size(), listSingleParam.size());
    }

    @Test
    public void testGetDocumentTypesValid_ExistingInParameter_OnePresentOneNot() {
        MultiValueMap<String, Object> map = new LinkedMultiValueMap<String, Object>();
        map.addAll("existing", List.of("9AF", "Pippo"));
        MultiValueMap<String, Object> singleParamMap = new LinkedMultiValueMap<String, Object>();
        singleParamMap.addAll("existing", List.of("9AF"));
        List<Map<String, Object>> list = controller.list(map, 0L, 10L, "id", "asc");
        List<Map<String, Object>> listSingleParam = controller.list(singleParamMap, 0L, 10L, "id", "asc");
        assertNotNull(list);
        assertNotNull(listSingleParam);
        assertTrue(list.size() > 0);
        assertTrue(listSingleParam.size() > 0);
        assertNotNull(list.get(0).get("id"));
        assertNotNull(listSingleParam.get(0).get("id"));
        assertEquals(list.size(), listSingleParam.size());
    }

    @Test
    public void testGetDocumentTypesValid_IdInInParameter_Present() {
        MultiValueMap<String, Object> map = new LinkedMultiValueMap<String, Object>();
        map.addAll("id_in", List.of("9AF", "NGM"));
        MultiValueMap<String, Object> singleParamMap = new LinkedMultiValueMap<String, Object>();
        singleParamMap.addAll("id_in", List.of("9AF"));
        List<Map<String, Object>> list = controller.list(map, 0L, 10L, "id", "asc");
        List<Map<String, Object>> listSingleParam = controller.list(singleParamMap, 0L, 10L, "id", "asc");
        assertNotNull(list);
        assertNotNull(listSingleParam);
        assertTrue(list.size() > 0);
        assertTrue(listSingleParam.size() > 0);
        assertNotNull(list.get(0).get("id"));
        assertNotNull(listSingleParam.get(0).get("id"));
        assertTrue(list.size() > listSingleParam.size());
    }

    @Test
    public void testGetDocumentTypesValid_IdInInParameter_NotPresent() {
        MultiValueMap<String, Object> map = new LinkedMultiValueMap<String, Object>();
        map.addAll("id_in", List.of("Pippo", "Pluto"));
        List<Map<String, Object>> list = controller.list(map, 0L, 10L, "id", "asc");
        assertNotNull(list);
        assertEquals(0, list.size());
    }

    @Test
    public void testGetDocumentTypesValid_IdInInParameter_OnePresentOneNot() {
        MultiValueMap<String, Object> map = new LinkedMultiValueMap<String, Object>();
        map.addAll("id_in", List.of("9AF", "Pippo"));
        MultiValueMap<String, Object> singleParamMap = new LinkedMultiValueMap<String, Object>();
        singleParamMap.addAll("id_in", List.of("9AF"));
        List<Map<String, Object>> list = controller.list(map, 0L, 10L, "id", "asc");
        List<Map<String, Object>> listSingleParam = controller.list(singleParamMap, 0L, 10L, "id", "asc");
        assertNotNull(list);
        assertNotNull(listSingleParam);
        assertTrue(list.size() > 0);
        assertTrue(listSingleParam.size() > 0);
        assertNotNull(list.get(0).get("id"));
        assertNotNull(listSingleParam.get(0).get("id"));
        assertEquals(list.size(), listSingleParam.size());
    }

    @Test
    public void testGetDocTypesNotValid_ParametersNull() {
        try {
            Map<String, Object> map = null;
            controller.list(map, 0L, 10L, "id", "asc");
        } catch (NullPointerException e) {
            return;
        }
        fail("Eccezione NullPointerException non rilanciata");
    }

    @Test
    public void testGetDocTypesInvaild_offsetNegative() {
        try {
            controller.list(Map.of(), -1L, 10L, "id", "asc");
        } catch (Exception e) {
            assertEquals("ERROR: OFFSET must not be negative", e.getCause().getMessage());
            return;
        }
        fail("Eccezione non rilanciata, offset negativo");
    }

    @Test
    public void testGetDocTypesInvaild_limitNegative() {
        try {
            controller.list(Map.of(), 1L, -1L, "id", "asc");
        } catch (Exception e) {
            assertEquals("ERROR: LIMIT must not be negative", e.getCause().getMessage());
            return;
        }
        fail("Eccezione non rilanciata, limit negativo");
    }

    // TESTs su GET doctypes/{id}

    @Test
    public void testGetDocTypesIdValid() {
        Map<String, Object> doc = controller.get("9AF");
        assertNotNull(doc);
        assertEquals("9AF", doc.get("id"));
    }

    @Test
    public void testGetDocTypesIdNotValid() {
        try {
            controller.get("AA");
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.NOT_FOUND, e.getStatus());
            assertEquals("Entity AA not found", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.NOT_FOUND not thrown");
    }

}

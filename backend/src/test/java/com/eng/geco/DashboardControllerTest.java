package com.eng.geco;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;
import java.util.Map;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

 @SpringBootTest
public class DashboardControllerTest extends BaseTest{

    @Autowired
    DashboardController controller;

    @Test
    public void testContextLoads() {
        assertTrue(true);
    }

    @Test
    public void testControllerLoads(){
        assertNotNull(controller);
    }


    @Test
    public void getDashboard_ValidSections() {
        List<String> sections = List.of("contracts_incompleted_by_service", "documents_by_year", "documents_by_service",
                "contracts_completed_by_service");
        sections.forEach(
            section -> {
                Map<String, Object> chart = controller.get(section);
                assertNotNull(chart);
                assertNotNull(chart.get("labels"));
                assertNotNull(chart.get("data"));
            }
        );
    }


    // @Test
    // public void getDashboard_NotValidSections(){
    //     try {
    //         controller.get("pippo");
    //     }
    //     catch( ResponseStatusException e  ){
    //         assertEquals(HttpStatus.NOT_FOUND, e.getStatus());
    //         return ;
    //     }
    //     fail("Wrong section didn't raised exception");
    // }


}

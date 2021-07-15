package com.eng.geco;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class TranslationControllerTest {

    @Autowired
    TranslateController controller ;

    @Test
    public void testContextLoads() {
        assertTrue(true);
    }

    @Test
    public void testGetTranslationValid() {
        Map<Object, Object> c = controller.get("it-IT");
        assertNotNull(c);
        assertTrue(c.keySet().size() > 0 );
    }

    @Test
    public void testGetTranslationNotValid() {
        Map<Object, Object> c = controller.get("USA");
        assertNotNull(c);
        assertEquals(0 ,c.keySet().size() );

    }



}

package com.eng.geco;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.io.IOException;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ConfigControllerTest {


    @Autowired
    ConfigController controller ;

    @Test
    public void testContextLoads() {
        assertTrue(true);
    }

    @Test
    public void testGetConfig() throws IOException {
        Map<String, Object> c = controller.config();
        assertNotNull(c);
        assertNotNull(c.get("client_id"));
        assertNotNull(c.get("base_url"));
        assertNotNull(c.get("ids_url"));
        assertNotNull(c.get("fake_authentication"));

    }

}

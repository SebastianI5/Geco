package com.eng.geco;

import java.util.List;
import java.util.Map;

public class Constants {

	public static final List<String> SERVICES = List.of("Rivendita", "Assistenza", "Preparatore", "Usato", "ooaa",
			"trader - stock locator", "dealer - stock locator");
	public static final List<String> MARKETS = List.of("1000");
	public static final List<String> BRANDS = List.of("00", "06", "57", "66", "70", "77", "83");
	public static final List<String> DEALER_STATUS = List.of("0", "1", "2", "8", "9");

	public static final Map<String, String> BOX_STATUS_MACHINE = Map.of("SCATOLA.NEW", "SCATOLA.DAINVIARE",
			"SCATOLA.DAINVIARE", "SCATOLA.INVIATA", "SCATOLA.INVIATA", "SCATOLA.RICEVUTA", "SCATOLA.RICEVUTA",
			"SCATOLA.SCAN", "SCATOLA.SCAN", "SCATOLA.SCAN");

	private Constants() {
	}
}

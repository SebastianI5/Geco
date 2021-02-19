import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 't'
})
export class TPipe implements PipeTransform {

  dictionary = {
    //titles
    dealer_list: "Lista dealers",
    contract_list: "Lista contratti",
    document_list: "Lista documenti",
    version_list: "Lista versioni",
    cover_list: "Lista frontespizi",

    //commons
    search: "Ricerca",
    //dealers-component
    dealer: "Dealer",
    description: "Descrizione",
    id: "ID",
    status: "Status",
    info: "Info",
    structures: "Strutture",
    mandates: "Mandati",

    //dealers-info
    vat_code: "VAT code",
    market: "Mercato",
    sales_manager: "Responsabile vendite",
    after_sales_manager: "Responsabile post vendita",
    category: "Categoria",
    region_09: "CENTRO SUD",
    region_01: "NORD OVEST",
    dealers: "Dealers",
    contracts: "Contratti",

    //dealers-structure
    network: "Marchio rete",
    region: "Regione",
    zone: "Zona",
    field_manager: "Manager",
    
    //dealers-mandates
    services: "Servizi",
    service_Assistenza: "Assistenza",
    service_Rivendita: "Rivendita",


    //documents
    type: "Tipo",
    versions: "Versioni",
    pages: "Pagine",

    //contracts
    contract: "Contratti",
    service: "Servizio",
    brand: "Brand",
    documents: "Documenti",
    signed_contracts: "Contratto firmato",
    completed: "Completato",

    box: "Scatola",
    user: "Utente",
    boxes: "Lista scatole",
    created_at: "Data creazione",
    sent_at: "Data spedizione",
    received_at: "Data ricezione",
    updated_at: "Data ultimo agg.",
    "box_status_SCATOLA.SCAN": "Lavorata e contratto su documentale",
    covers: "Frontespizi"

  }

  transform(value: string): string {
    return this.dictionary[value] || "***" + value + "***";
  }

}

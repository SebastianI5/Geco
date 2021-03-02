import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 't'
})
export class TPipe implements PipeTransform {

  dictionary = {
    //titles
    dashboard: "Dashboard",
    dealer_list: "Lista dealers",
    contract_list: "Lista contratti",
    document_list: "Lista documenti",
    version_list: "Lista versioni",
    cover_list: "Lista frontespizi",

    //commons
    search: "Ricerca",
    action: "Azioni",
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
    report_dealer_no_pec :"Report Dealers senza PEC" ,
    report_occupation_by_pec :"Report Dealers occupazione PEC" ,
    export :"esporta dati" ,
    sent_at: "Data spedizione",
    received_at: "Data ricezione",
    updated_at: "Data ultimo agg.",
    "box_status_SCATOLA.SCAN": "Lavorata e contratto su documentale",
    covers: "Frontespizi",
    cover: "Frontespizio",
    sort: "Ordinamento",
    mandatory: "Obbligatorio",
    doc_type_selection: "Seleziona i tipi documentali",
    attachment: "Allegati",
    doc: "Tipo documentale",
    dealer_id_or_desc : "dealer id o descrizione del dealer",
    //TODO
    DEALER_STATUS_1 : "1-Active",
    DEALER_STATUS_0 : "0-Inactive",
    DEALER_STATUS_2 : "2-Residual Handlings",
    DEALER_STATUS_8 : "8-Stopped",
    DEALER_STATUS_9 : "9-Cancelled",
    BRAND_null : "",
    BRAND_70 : "Fiat"

  }

  transform(value: string): string {
    return this.dictionary[value] || "***" + value + "***";
  }

}

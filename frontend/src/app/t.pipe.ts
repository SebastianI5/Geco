import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 't'
})
export class TPipe implements PipeTransform {

  dictionary = {
    //commons
    search: "Ricerca",
    //dealers-component
    dealer: "Dealer",
    description: "Descrizione",
    id: "ID",
    status: "Status",

    //dealers-info
    vat_code: "VAT code",
    market: "Mercato",
    sales_manager: "Responsabile vendite",
    after_sales_manager: "Responsabile post vendita",
    category: "Categoria",
    region_09: "CENTRO SUD",
    region_01: "NORD OVEST",
    brand_00: "FIAT",
    dealers: "Dealers",
    contracts: "Contratti",

    //contracts
    contract: "Contratti",
    service: "Servizio",
    brand: "Brand",
    documents: "Documenti"

  }

  transform(value: string): string {
    return this.dictionary[value] || "***" + value + "***";
  }

}

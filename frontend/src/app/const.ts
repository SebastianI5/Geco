import { ABARTH } from "./brands/abarth";
import { ALFA_ROMEO } from "./brands/alfaRomeo";
import {FIAT} from "./brands/fiat";
import { FIAT_PROFESSIONAL } from "./brands/fiatProfessional";
import {JEEP} from "./brands/jeep";
import { LANCIA } from "./brands/lancia";
import { MOPAR } from "./brands/mopar";

export const BRANDS = [
  {
    label : "fiat",
    value : "00",
    image :  FIAT
  },
  {
    label : "jeep",
    value : "06",
    image : JEEP
  },
  {
    label : "mopar",
    value : "57",
    image : MOPAR
  },
  {
    label : "alfa_romeo",
    value : "66",
    image : ALFA_ROMEO
  },
  {
    label : "lancia",
    value : "70",
    image : LANCIA
  },
  {
    label : "abarth",
    value : "77",
    image : ABARTH
  },
  {
    label : "fiat_professional",
    value : "83",
    image : FIAT_PROFESSIONAL
  }
]

export const COLORS =  [
  {
  label: "green",
  value: "green"
},{
  label: "yellow",
  value: "yellow"
},{
  label: "red",
  value: "red"
}]



export const SERVICES = [
  {
    label : "rivendita",
    value : "rivendita"
  },
  {
    label : "assistenza",
    value : "assistenza"
  },
  {
    label : "preparatore",
    value : "preparatore"
  },
  {
    label : "usato",
    value : "Usato"
  },
  {
    label : "ooaa",
    value : "ooaa"
  },
  {
    label : "trader_stock_locator",
    value : "trader_stock_locator"
  },
  {
    label : "dealer_stock_locator",
    value : "dealer_stock_locator"
  }
]

export const BOXES_STATUS = [{
  label: "SCATOLA.NEW",
  value: "SCATOLA.NEW"
},{
  label: "SCATOLA.DAINVIARE",
  value: "SCATOLA.DAINVIARE"
},{
  label: "SCATOLA.INVIATA",
  value: "SCATOLA.INVIATA"
},{
  label: "SCATOLA.RICEVUTA",
  value: "SCATOLA.RICEVUTA"
},{
  label: "SCATOLA.SCAN",
  value: "SCATOLA.SCAN"
}
]


export const DEALER_STATUS = [{
    label: "dealer_status_0",
    value: "0"
  },{
    label: "dealer_status_1",
    value: "1"
  },{
    label: "dealer_status_8",
    value: "8"
  },{
    label: "dealer_status_9",
    value: "9"
  }
]

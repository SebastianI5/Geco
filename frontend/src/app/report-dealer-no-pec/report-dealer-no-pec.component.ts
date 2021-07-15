import { Component, OnInit } from '@angular/core';
import { BRANDS } from '../const';
import { brand_image } from '../util';
import { TPipe, BusService, PAGE_CHANGE, default_render } from '@eng';
import { ReportService } from '../report.service';
import { DealerService } from '../dealer.service';

@Component({
  selector: 'app-report-dealer-no-pec',
  templateUrl: './report-dealer-no-pec.component.html',
  styleUrls: ['./report-dealer-no-pec.component.css']
})
export class ReportDealerNoPecComponent implements OnInit {

  constructor(private reportService: ReportService,
              private t: TPipe,
              private bus: BusService,
              private d: DealerService) { }

  exportName="dealer-no-pec"

  ngOnInit(): void {
    this.bus.publish(PAGE_CHANGE, "report_dealer_no_pec");

  }

  config: any = {
    search_params: [{
      autocomplete: {
        label: "dealer",
        field: "dealer_id",
      config: {
        placeholder: "dealer_id_or_desc",
        backend: {
          field: "id_like",
          loadFn: this.dealers_load.bind( this ),
        },
        frontend: {
          valueFn : (option) => option.id ,
          renderFn : (option) => option ? option.dealer : "",
          displayFn: ( value , options ) => value ? options.find(e => e.id == value )['dealer'] : ""
          }
        }
      }
    },{
      label: "brand",
      field: "brand_id",
      select : BRANDS
    },{
      autocomplete: {
        label: "vat_code",
        field: "vatcode",
      config: {
        placeholder: "vat_code",
        backend: {
          field: "vatcode",
          loadFn: this.dealers_load.bind( this ),
        },
        frontend: {
          valueFn : (option) => option.id ,
          renderFn : (option) => option ? option.vatcode : "",
          displayFn: ( value , options ) => value ? options.find(e => e.id == value )['vatcode'] : ""
          }
        }
      }
    }
    // {
    //   label: "vat_code",
    //   field: "vatcode",
    //   text : "vatcode"
    // }
  ],
    table_fields: [{
      label: "vat_code",
      field: "vatcode",
      classes: ""
    },{
      label: "dealer",
      render : (row) => row.dealer_id + " - " + row.description,
      classes: ""
    },
    {
      label: "id_pec",
      field: "idpec"
    },
    {
      label: "brand",
      image: (row) =>  brand_image(row.brand_id),
      classes: ""
    }
  ],
  export_fields:[
    {
      key: "dealer_id",
      render: default_render("dealer_id")
    },
    {
      key: "description",
      render : default_render("description")
    },
    {
      key: "vat_code",
      render : default_render("vatcode")
    },
    {
      key: "idpec",
      render : default_render("idpec")
    },
    {
      key: "brand_id",
      render: (row) => (BRANDS.filter( e => e.value == row.brand_id ))[0]?.label
    }
  ]
  };

  params = {}

  async load(params) {
    return await this.reportService.dealers_no_pec(params);
  }

  dealers_load( params ) {
    return this.d.list( params )
  }
}

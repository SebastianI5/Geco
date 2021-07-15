import { Component, OnInit } from '@angular/core';
import { TPipe, BusService, PAGE_CHANGE, default_render } from '@eng';
import { BRANDS, COLORS } from '../const';
import { DealerService } from '../dealer.service';
import { ReportService } from '../report.service';
import { brand_image } from '../util';

@Component( {
  selector: 'app-report-occupation-by-pec',
  templateUrl: './report-occupation-by-pec.component.html',
  styleUrls: ['./report-occupation-by-pec.component.css']
} )
export class ReportOccupationByPecComponent implements OnInit {

  constructor( private report: ReportService,
              private t: TPipe,
              private bus: BusService,
              private d: DealerService ) { }

  ngOnInit(): void {
    this.bus.publish(PAGE_CHANGE, "report_occupation_by_pec");
  }

  exportName = "occupation"

  config: any = {
    search_params: [
      {
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
        label: "color",
        field: "color",
        checkbox: COLORS
      }
    ],
    table_fields: [
      {
        label: "id_pec",
        field: "idpec",
        classes: ""
      },
      {
        label: "space",
        classes: "",
        render: ( row ) => row.space + " MB (" + row.percentage + "%)"
      },
      {
        label: "dealer",
        render : (row) => row.dealer_id + " - " + row.description,
        classes: ""
      },
      {
        label: "category",
        field: "category",
        classes : "xs"
      },
      {
        label: "brand",
        image: (row) => brand_image(row.brand_id),
        classes: ""
      }
    ],
    export_fields: [
      {
        key: "dealer_id",
        render : default_render("dealer_id")
      },
      {
        key: "description",
        render : default_render("description")
      },
      {
        key: "brand_id",
        render :( row ) =>  (BRANDS.filter( e => e.value == row.brand_id ))[0]?.label
      },
      {
        key: "idpec",
        render : default_render("idpec")
      },
      {
        key: "space",
        render: ( row ) => row.space + " MB (" + row.percentage + "%)"
      },
      {
        key: "category",
        render : default_render("category")
      },
      {
        key: "salesmanager",
        render : default_render("salesmanager")
      },
      {
        key: "aftersalesmanager",
        render : default_render("aftersalesmanager")
      },
      {
        key: "status",
        render: ( row ) => this.t.transform( "DEALER_STATUS_" + row.status )
      }
    ],
    color_class: ( row ) =>  this.getColor(row)
  };



  private getColor(row : any){
    if ( row.percentage <= 60 ) {
      return "green-row";
    }
    if ( row.percentage <= 80 ) {
      return "yellow-row";
    }
    return "red-row";
  }

  params = {
  }

  async load( params ) {
    return await this.report.occupation( params );
  }

  dealers_load( params ) {
    return this.d.list( params )
  }
}

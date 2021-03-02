import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { TPipe } from '../t.pipe';

@Component( {
  selector: 'app-report-occupation-by-pec',
  templateUrl: './report-occupation-by-pec.component.html',
  styleUrls: ['./report-occupation-by-pec.component.css']
} )
export class ReportOccupationByPecComponent implements OnInit {

  constructor( private report: ReportService, private t: TPipe ) { }

  ngOnInit(): void { }

  exportName = "occupation"

  config: any = {
    search_params: [
      {
        label: "dealer_id_or_desc",
        field: "dealer_id"
      },
      {
        label: "color",
        field: "color"
      },
      {
        label: "brand",
        field: "brand_id"
      }
    ],
    table_fields: [
      {
        label: "idpec",
        field: "idpec",
        classes: ""
      },
      {
        label: "space",
        field: "space",
        classes: "",
        render: ( row ) => row.space + " MB"
      },
      {
        label: "percentage",
        field: "percentage",
        render: ( row ) => row.percentage + " %",
        classes: ""
      },
      {
        label: "dealer",
        field: "dealer_id",
        classes: ""
      },
      {
        label: "description",
        field: "description",
        classes: ""
      },
      {
        label: "brand",
        field: "brand_id",
        classes: ""
      }
    ],
    export_fields: [
      {
        key: "percentage",
        render: ( row ) => row.percentage + "%"
      },
      {
        key: "status",
        render: ( row ) => this.t.transform( "DEALER_STATUS_" + row.status )
      },
      {
        key: "brand_id",
        render: ( row ) => this.t.transform( "BRAND_" + row.brand_id )
      },
      {
        key: "space",
        render: ( row ) => row.space + " MB"
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
}

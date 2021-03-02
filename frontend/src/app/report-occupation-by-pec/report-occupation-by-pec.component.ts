import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { TPipe } from '../t.pipe';

@Component({
  selector: 'app-report-occupation-by-pec',
  templateUrl: './report-occupation-by-pec.component.html',
  styleUrls: ['./report-occupation-by-pec.component.css']
})
export class ReportOccupationByPecComponent implements OnInit {

  constructor(private report: ReportService,  private t: TPipe) { }

  ngOnInit(): void {}

  exportName = "occupation"

  config: any = {
    search_params: [
      {
      label: "dealer",
      field: "dealer_id"
      },
      {
        label: "color",
        field: "color"
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
      classes: ""
    },
    {
      label: "percentage",
      field: "percentage",
      classes: ""
    },
    {
      label: "color",
      render : (row) => {
        if(row.percentage <= 60){
          return "green";
        }
        if (row.percentage <= 80 ){
          return "yellow";
        }
        return "red";
      },
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
  ]
  };



  params = {
  }

  async load(params) {
    return await this.report.occupation(params);
  }
}

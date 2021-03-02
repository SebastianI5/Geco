import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { TPipe } from '../t.pipe';

@Component({
  selector: 'app-report-dealer-no-pec',
  templateUrl: './report-dealer-no-pec.component.html',
  styleUrls: ['./report-dealer-no-pec.component.css']
})
export class ReportDealerNoPecComponent implements OnInit {

  constructor(private reportService: ReportService,  private t: TPipe) { }

  exportName="dealer-no-pec"

  ngOnInit(): void {}

  config: any = {
    search_params: [],
    table_fields: [{
      label: "vatcode",
      field: "vatcode",
      classes: ""
    },{
      label: "description",
      field: "description",
      classes: ""
    },{
      label: "dealer_id",
      field: "dealer_id",
      classes: ""
    }
  ]
  };



  async load(params) {
    return await this.reportService.dealers_no_pec(params);
  }
}

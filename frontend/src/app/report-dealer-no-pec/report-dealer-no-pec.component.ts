import { Component, OnInit } from '@angular/core';
import { DealerService } from '../dealer.service';
import { TPipe } from '../t.pipe';

@Component({
  selector: 'app-report-dealer-no-pec',
  templateUrl: './report-dealer-no-pec.component.html',
  styleUrls: ['./report-dealer-no-pec.component.css']
})
export class ReportDealerNoPecComponent implements OnInit {

  constructor(private d: DealerService,  private t: TPipe) { }

  ngOnInit(): void {}

  config: any = {
    search_params: [],
    table_fields: [{
      label: "id",
      field: "id",
      classes: ""
    },{
      label: "description",
      field: "description",
      classes: ""
    },{
      label: "status",
      render: (row) => this.t.transform("dealer_status_" + row.status),
      classes: "xs"
    }]
  };

  params = {
    idpec_null : "true",
    fake : "N"
  }

  async load(params) {
    return await this.d.list(params);
  }
}

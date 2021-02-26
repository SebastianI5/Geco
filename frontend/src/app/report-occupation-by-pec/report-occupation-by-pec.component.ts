import { Component, OnInit } from '@angular/core';
import { DealerService } from '../dealer.service';
import { TPipe } from '../t.pipe';

@Component({
  selector: 'app-report-occupation-by-pec',
  templateUrl: './report-occupation-by-pec.component.html',
  styleUrls: ['./report-occupation-by-pec.component.css']
})
export class ReportOccupationByPecComponent implements OnInit {

  constructor(private d: DealerService,  private t: TPipe) { }

  ngOnInit(): void {}

  config: any = {
    search_params: [{
      label: "dealer",
      field: "id"
    }],
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
    idpec_not_null : "true",
    fake : "N"
  }

  async load(params) {
    return await this.d.list(params);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DealerService } from '../dealer.service';
import { DealerComponent } from '../dealer/dealer.component';

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.css']
})
export class VersionsComponent implements OnInit {

  config: any = {
    search_params: [],
    table_fields: [{
      label: "id",
      field: "id",
      classes: ""
    },{
      label: "created_at",
      field: "created_at",
      classes: ""
    },{
      label: "status",
      render: (row) => "versions_status_" + row.status.id,
      classes: ""
    },{
      label: "box",
      render: (row) => row.paper.box,
      classes: ""
    }]  
  };

  params = {};

  constructor(private d: DealerService, private a: ActivatedRoute) { }

  ngOnInit(): void {
  }

  async load(params) {
    let dealer = await this.d.get(this.a.snapshot.params.id);
    let contract_id =  this.a.snapshot.params.contract_id;
    let contract = dealer["contracts"].find(e => e.id == contract_id);
    return contract.documents.find(e => e.type==this.a.snapshot.params.document_id).versions;
  }

  navigate(row){}

}

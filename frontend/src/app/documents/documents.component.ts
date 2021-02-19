import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DealerService } from '../dealer.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  config: any = {
    search_params: [],
    table_fields: [{
      label: "type",
      field: "type",
      classes: ""
    },{
      label: "description",
      field: "description",
      classes: ""
    },{
      label: "versions",
      render: (row) => this.last_version(row.versions).id,
      classes: "xs"
    },{
      label: "created_at",
      render: (row) => this.first_version(row.versions).created_at,
      classes: "xs"
    },{
      label: "pages",
      render: (row) => this.last_version(row.versions).digital.pages,
      classes: "xs"
    }]  
  };

  params = {};

  constructor(private d: DealerService, private a: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {}

  async load(params) {
    let dealer = await this.d.get(this.a.snapshot.params.id);
    let contract_id =  this.a.snapshot.params.contract_id;
    let contract = dealer["contracts"].find(e => e.id == contract_id);
    return contract.documents;
  }

  navigate(row){
    this.router.navigate([`/dealers/${this.a.snapshot.params.id}/contracts/${this.a.snapshot.params.contract_id}/documents/${row.type}/versions`]);
  }

  first_version(versions){
    let first_version_id = Math.min(...versions.map(e => e.id));
    return versions.find(e => e.id == first_version_id);
  }

  last_version(versions){
    let last_version_id = Math.max(...versions.map(e => e.id));
    return versions.find(e => e.id == last_version_id);
  }

}

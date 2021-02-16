import { Component, OnInit } from '@angular/core';
import { ContractService } from '../contract.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  config: any = {
    search_params: [{
      label: "contract",
      field: "id"
    }],
    table_fields: [{
      label: "service",
      field: "service",
      classes: ""
    },{
      label: "brand",
      field: "brand_id",
      classes: ""
    },{
      label: "documents",
      render: (row) => row.documents.length,
      classes: "xs"
    }]  
  };

  params = {
    id: ""
  }

  constructor(private c: ContractService) { }

  ngOnInit(): void {}

  async load(params) {
    return await this.c.list(params);
  }

  navigate(row){
  }

  

}

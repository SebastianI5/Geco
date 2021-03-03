import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContractService } from '../contract.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  config: any = {
    //dealer, brand, servizio, marchio rete, zona
    search_params: [{
      label: "contract",
      field: "id"
    },{
      label: "brand",
      field: "brand_id"
    },{
      label: "service",
      field: "service_id"
    }],
    table_fields: [{
      label: "id",
      field: "id",
      classes: ""
    },{
      label: "service",
      field: "service_id",
      classes: ""
    },{
      label: "brand",
      image: (row) => "/assets/brand_" + row.brand_id + ".png",
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

  constructor(private c: ContractService, private router: Router) { }

  ngOnInit(): void {}

  async load(params) {
    return await this.c.list(params);
  }

  navigate(row){
    this.router.navigate(['/dealers/'+row.dealer_id+'/contracts/'+row.id+'/documents']);
  }

  

}

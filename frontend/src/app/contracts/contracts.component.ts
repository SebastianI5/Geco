import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService, default_render, PAGE_CHANGE, TPipe } from '@eng';
import { BRANDS, SERVICES } from '../const';
import { ContractService } from '../contract.service';
import { DealerService } from '../dealer.service';
import { brand_image } from '../util';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  exportName= "contracts"

  config: any = {
    //dealer, brand, servizio, marchio rete, zona
    search_params: [{
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
      label: "service",
      field: "service_id",
      select : SERVICES
    }],
    table_fields: [{
      label: "dealer",
      render: (row) => row.dealer_id + " - " + row.description ,
      classes: ""
    },{
      label: "service",
      field: "service_id",
      classes: ""
    },{
      label: "brand",
      image: (row) => brand_image(row.brand_id),
      classes: ""
    },{
      label: "documents",
      render: (row) => row.documents.length,
      classes: "xs"
    }],
    export_fields : [
      {
        key: "dealer_id",
        render : default_render("dealer_id")
      },
      {
        key: "description",
        render : default_render("description")
      },
      {
        key: "service",
        render : default_render("service_id")
      },
      {
        key: "brand_id",
         render :( row ) =>  (BRANDS.filter( e => e.value == row.brand_id ))[0]?.label
      },
      {
        key: "documents",
        render : (row) => this.getDocList(row.documents)
      }
    ]
  };

  params = {}

  constructor(private c: ContractService, 
      private router: Router, 
      private t : TPipe, 
      private bus: BusService,
      private d: DealerService) { }

  ngOnInit(): void {
    this.bus.publish(PAGE_CHANGE, "contract_list");
  }

  async load(params) {
    return await this.c.list(params);
  }


  getDocList( docs : any[] ){
    return docs.map( e => e.type).join( "," )
  }


  navigate(row){
    this.router.navigate(['/dealers/'+row.dealer_id+'/contracts/'+row.id+'/documents']);
  }

  dealers_load( params ) {
    return this.d.list( params )
  }

}

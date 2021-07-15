import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { default_render, TPipe, BusService, PAGE_CHANGE } from '@eng';
import { DealerService } from '../dealer.service';


@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.css']
})
export class DealersComponent implements OnInit {

  exportName = "dealers"


  config: any = {
    search_params: [
      // {
      //   label: "dealer_id_or_desc",
      //   field: "id_like",
      //   text : "dealer"
      // }
      {
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
      }
    ],
    table_fields: [{
      label: "dealer",
      render : (row) => row.id + " - " + row.description ,
      classes: ""
    },
    {
      label : "vat_code",
      field : "vatcode"
    },
    {
      label : "market",
      render: (row) => this.t.transform("market_" + row.market)
    },
    {
      label: "status",
      render: (row) => this.t.transform("DEALER_STATUS_" + row.status),
      classes: "xs"
    }],
    export_fields: [
      {
        key: "dealer_id",
        render : default_render("id")
      },
      {
        key: "description",
        render : default_render("description")
      },
      {
        key: "market",
        render: default_render("market")
      },
      {
        key: "vat_code",
        render : default_render("vatcode")
      },
      {
        key: "status",
        render: ( row ) => this.t.transform( "DEALER_STATUS_" + row.status )
      }
    ]
  };

  params = {
    id_like: ""
  }

  constructor(private d: DealerService, private router: Router, private t: TPipe, private bus: BusService) { }

  ngOnInit(): void {
    this.bus.publish(PAGE_CHANGE, "dealer_list");
  }

  async load(params) {
    return await this.d.list(params);
  }

  navigate(row){
    this.router.navigate(['/dealers/'+row.id]);
  }

  dealers_load( params ) {
    return this.d.list( params )
  }

}

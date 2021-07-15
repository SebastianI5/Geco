 import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TPipe, ConfigService, BusService, PAGE_CHANGE } from '@eng';
import { DealerService } from '../dealer.service';
import { GecoDatePipe } from '../geco-date.pipe';
import { brand_image } from '../util';

@Component( {
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.css']
} )
export class VersionsComponent implements OnInit {

  token: any;

  brand_image = brand_image

  config: any = {
    search_params: [],
    table_fields: [{
      label: "created_at",
      render: ( row ) => this.date.transform( row.created_at ),
      classes: ""
    }, {
      label: "status",
      render: ( row ) => this.t.transform( "versions_status_" + row.status ),
      classes: ""
    }, {
      label: "box",
      render: ( row ) => row.paper.box_id,
      classes: ""
    }, {
      label: "action",
      actions: [{
        action: ( row ) => this.downloadPdf( row ),
        icon: "save_alt",
        title: "empty_string",
        condition: ( _ ) => true
      }],
      classes: "small-column"
    }]
  };

  params = {};

  constructor( private d: DealerService,
    private a: ActivatedRoute,
    private date: GecoDatePipe,
    private t: TPipe,
    private configService: ConfigService,
    private bus: BusService) { }

  ngOnInit(): void {
    this.bus.publish(PAGE_CHANGE, "version_list");
  }

  info = { dealer: "", dealer_id: "", service: "", document: "", brand_id: "", contract_id : "" }


  async load( params ) {
    let dealer = await this.d.get( this.a.snapshot.params.id );
    if(!dealer){ this.bus.publish("ERROR", {error: { status: 404}}); return};
    let contract_id = this.a.snapshot.params.contract_id;
    let contract = dealer["contracts"].find( e => e.id == contract_id );
    if(!contract){ this.bus.publish("ERROR", {error: { status: 404}}); return};
    let document = contract["documents"].find( d => d.type == this.a.snapshot.params.document_id );
    if(!document){ this.bus.publish("ERROR", {error: { status: 404}}); return};
    this.info.dealer = dealer.description
    this.info.dealer_id = dealer.id
    this.info.brand_id = contract.brand_id
    this.info.service = contract.service_id
    this.info.contract_id = contract_id
    this.info.document = document["type"]
    this.token = localStorage.getItem( "access_token" )
    return contract.documents.find( e => e.type == this.a.snapshot.params.document_id ).versions;
  }

  navigate( row ) { }


  downloadPdf( row ) {
    window.open(
      this.configService.get( "base_url" ) +
      "/contracts/" +
      this.a.snapshot.params.contract_id +
      "/documents/" +
      this.info.document +
      "/versions/" + row.created_at
      + "/pdf" + "?x-authorization=" + this.token )

  }

}

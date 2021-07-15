import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCoverBottomSheetComponent } from '../add-cover-bottom-sheet/add-cover-bottom-sheet.component';
import { brand_image } from '../util';
import { GecoDatePipe  } from '../geco-date.pipe';
import { BoxesService } from '../boxes.service';
import { CoverService } from '../cover.service';
import { BusService, PAGE_CHANGE, RELOAD_EVENT, TPipe, pdf, timestamp, user } from '@eng';



@Component( {
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
} )
export class BoxComponent implements OnInit {

  list_remaining = []
  token : any;

  box: any;
  config: any = {
    search_params: [],
    table_fields: [
      {
        label: "service",
        render: ( row ) => this.t.transform( "service_" + row.service_id ),
        classes: ""
      },{
      label: "market",
      render: ( row ) => this.t.transform( "market_" + row.market   ),
      classes: "xs"
    },{
      label: "brand",
      image: ( row ) => brand_image(row.brand_id),
      classes: ""
    }, {
      label: "dealer",
      render: ( row ) => row.dealer_id + " - " + row.description,
      classes: ""
    }, {
      label: "created_at",
      render: ( row ) => this.date.transform( row.created_at ),
      classes: "xs"
    }, {
      label: "num_documents",
      render: ( row ) => ( row.document_types?.length ),
      classes: ""
    }, {
      label: "action",
      actions: [{
        action: ( row ) => this.remove_cover( row.id ),
        icon: "delete",
        title: "empty_string",
        condition: ( _ ) => true
      }]
    }]
  };

  params = {}

  constructor( private b: BoxesService,
    private c: CoverService,
    private router: Router,
    private a: ActivatedRoute,
    private date: GecoDatePipe,
    private bs: MatBottomSheet,
    private bus: BusService,
    private t: TPipe ) { }

  ngOnInit(): void {
    this.load();
    this.token = localStorage.getItem( "access_token" );
    this.bus.publish(PAGE_CHANGE, "cover_list");
  }

  async load() {
    this.box = await this.b.get( this.a.snapshot.params.id );
  }

  navigate( row ) {
    this.router.navigate( ['boxes/'+ this.a.snapshot.params.id +'/covers/' + row.id] )

  }

  async load_covers( params ) {
    this.list_remaining = await this.c.list( { "username": user()["name"], box_id_null: true } );
    return await this.c.list( Object.assign({box_id: this.a.snapshot.params.id}, params ) );
  }

  openBottomSheet = () => {
    this.bs.open( AddCoverBottomSheetComponent, {
      data: { "id": this.a.snapshot.params.id, "list": this.list_remaining }
    } );
  }

  async remove_cover( id: string ) {
    await this.c.put( id, { "box_id": null } );
    await this.bus.publish( RELOAD_EVENT );
  }

  download(){
    let template = [{
        type: "barcode",
        key: "barcode",
        x: 10,
        y: 20,
        w: 190,
        h: 30
      },{
        type: "text",
        key: "box",
        x: 10,
        y: 100,
        size: 50
      },{
        type: "text",
        key: "send_to",
        x: 10,
        y: 140
      }];


    let data = [{
      barcode: ["GECO-BOX",
        this.box.id,
        this.box.username,
        this.box.status].join("-"),
      box: "Box n: " + this.box.id,
      send_to: "Spedire a: Seta srl - Loc Campo 88040 - Settingiano (Catanzaro CZ)"
    }]

    pdf(template, data, ['box', this.box.id, timestamp()].join('-'));

  }

}

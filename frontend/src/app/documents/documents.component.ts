import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TPipe, BusService, PAGE_CHANGE, ERROR , ConfigService} from '@eng';
import { DealerService } from '../dealer.service';
import { DocumentTypesService } from '../document-types.service';
import { GecoDatePipe } from '../geco-date.pipe';
import { brand_image } from '../util';

@Component( {
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
} )
export class DocumentsComponent implements OnInit {

  dealer: any;
  contract: any;
  token: any;

  brand_image = brand_image

  config: any = {
    search_params: [],
    table_fields: [{
      label: "type",
      field: "type",
      classes: ""
    },
    {
      label: "category",
      render: ( row ) => this.t.transform( row?.category ),
      classes: ""
    },
    {
      label: "versions",
      render: ( row ) => row.versions.length,
      classes: "xs"
    }, {
      label: "created_at",
      render: ( row ) => this.date.transform( this.first_version( row.versions ).created_at ),
      classes: "xs"
    }, {
      label: "updated_at",
      render: ( row ) => this.date.transform( this.last_version( row.versions ).created_at ),
      classes: "xs"
    }, {
      label: "pages",
      render: ( row ) => this.last_version( row.versions ).digital.pages,
      classes: "xs"
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
    private doc: DocumentTypesService,
    private router: Router,
    private t: TPipe,
    private date: GecoDatePipe,
    private configService: ConfigService,
    private bus: BusService ) { }

  async ngOnInit() {
    this.dealer = await this.d.get( this.a.snapshot.params.id );
    if ( !this.dealer ) { this.bus.publish( ERROR, { error: { status: 404 } } ); return };
    let contract_id = this.a.snapshot.params.contract_id;
    this.contract = this.dealer["contracts"].find( e => e.id == contract_id );
    if ( !this.contract ) { this.bus.publish( ERROR, { error: { status: 404 } } ); return };
    this.token = localStorage.getItem( "access_token" );
    this.bus.publish( PAGE_CHANGE, "document_list" );
  }

  async load( params ) {
    let docs = this.contract.documents.sort( ( a, b ) => a.type > b.type ? 1 : -1 );
    let types = await this.doc.list( { "id_in": docs.map( e => e.type ), "limit": 10000 } )
    return docs.map( e => Object.assign( e, { "category": types.find( x => x.id == e.type )?.category } ) )
  }

  navigate( row ) {
    this.router.navigate( ["/dealers/" + this.a.snapshot.params.id + "/contracts/" + this.a.snapshot.params.contract_id + "/documents/" + row.type + "/versions"] );
  }


  downloadPdf( row ) {
    window.open( this.configService.get( "base_url" ) + "/contracts/" + this.contract.id + "/documents/" + row.type + "/versions/" + ( this.last_version( row.versions ) ).created_at + "/pdf" + "?x-authorization=" + this.token )
  }


  first_version( versions ) {
    return versions.sort( ( a, b ) => a < b ? -1 : 1 )[0];
  }

  last_version( versions ) {
    return versions.sort( ( a, b ) => a > b ? -1 : 1 )[0];
  }

}

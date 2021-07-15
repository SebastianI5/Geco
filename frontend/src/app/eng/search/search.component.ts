import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BusService, RELOAD_EVENT } from '../bus.service';
import { excel } from '../excel';
import { TPipe } from '../t.pipe';
import { end_of_day } from '../util';

@Component( {
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
} )
export class SearchComponent implements OnInit {

  @ViewChild( "picker" ) picker;

  list: any[] = [];


  common_params = {
    offset: 0,
    limit: 10,
    sort: '',
    direction: ''
  }

  @Input()
  config: any;

  @Input()
  params: any;

  @Input()
  load: any;

  @Input()
  navigate: any;

  @Input()
  export: any;

  @Input()
  add_item: any;

  @Input()
  show_add: boolean;

  @Input()
  checkbox: any;

  constructor( private bus: BusService,
    private t: TPipe,
    private sb : MatSnackBar ) { }

  async ngOnInit() {
    this.params = JSON.parse( sessionStorage.getItem( window.location.href ) || JSON.stringify( this.params ) );
    this.bus.subscribe( RELOAD_EVENT, () => this.load_list() );
    await this.load_list();
  }

  async pageChanged( e ) {
    this.common_params.offset = e.pageIndex * e.pageSize;
    this.common_params.limit = e.pageSize;
    await this.load_list();
  }

  resetOffset() {
    this.common_params.offset = 0;
  }

  async sort( e ) {
    this.common_params.sort = e.active;
    this.common_params.direction = e.direction;
    this.resetOffset();
    await this.load_list();
  }

  table_fields() {
    return this.config.table_fields.map( e => e.label );
  }

  async search_clicked() {
    this.resetOffset();
    await this.load_list();
  }

  async load_list() {
    sessionStorage.setItem( window.location.href, JSON.stringify( this.params ) );
    this.list = await this.load( Object.assign( {}, this.common_params, this.params ) );
  }

  setValue( event, value, name ) {
    this.params[name] = this.params[name] || []
    if ( event.checked ) {
      this.params[name].push( value )
    }
    else {
      this.params[name] = this.params[name].filter( e => e != value )
    }
  }

  doNavigate( row ) {
    this.navigate && this.navigate( row );
  }

  async export_as_excel() {
    let limit = 10000
    if (this.list[0]['record_count'] > limit){
      this.sb.open( this.t.transform("export_limit" , {LIMIT: limit, TOT : this.list[0]['record_count']}) , "OK", {duration : 5000});
    }
    await this.search_clicked()
    let aux = await this.load( Object.assign( {}, this.common_params, this.params, { limit: limit } ) )

    aux = aux
      .map( e => this.renderObject( e ) )
      .map( e => this.exportObject( e ) )
      .map( e => this.translateObject( e ) )
    let headers = this.config.export_fields.map( e => this.t.transform( e.label ) )
    excel( aux, "report-" + this.export, this.export, headers );
  }


  private renameField( o: any, oldName: string, newName: string ) {
    if ( oldName == newName ) {
      return o;
    }
    let result = Object.assign( {}, o )
    result[newName] = result[oldName];
    delete result[oldName];
    return result;
  }

  private translateObject( o: any ) {
    let result = Object.assign( {}, o );
    Object.keys( result ).forEach(
      e => {
        result = this.renameField( result, e, this.t.transform( e ) )
      } )
    return result;
  }

  private exportObject( o: any, ) {
    return this.config.export_fields.reduce( ( r, e ) => {
      r[e.label] = o[e.label];
      return r;
    }, {} );
  }

  private renderObject( o: any ) {
    let result = Object.assign( {}, o )
    this.config.export_fields.forEach(
      e => result[e.label] = e.render( result )
    )
    return result;
  }


  resetDate( date ) {
    this.params[date.start] = ""
    this.params[date.end] = ""
  }

  format_date(label){
     this.params[label] = end_of_day(this.params[label])
  }

}

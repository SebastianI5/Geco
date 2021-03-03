import { Component, Input, OnInit} from '@angular/core';
import { BusService, RELOAD_EVENT } from 'src/app/bus.service';
import { ExcelService } from '../excel.service';
import { TPipe } from '../t.pipe';

@Component( {
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
} )
export class SearchComponent implements OnInit {

  disable_route: false;

  list : any [] = [];

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

  constructor( private bus: BusService, private excelService: ExcelService, private t : TPipe ) { }

  async ngOnInit() {
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

  async load_list() {
    this.disable_route = false;
    let trimmedParams = {}
    if (this.params){
      Object.keys(this.params).forEach(k => trimmedParams[k] = this.params[k].trim())
    }
    this.list = await this.load( Object.assign({},  this.common_params, trimmedParams ) );
  }


  async export_as_excel( ) {
    let aux = await this.load( Object.assign( {}, this.common_params, this.params, {limit : 100000} ) )
    aux.forEach(element => {
      delete element["record_count"]
    });
    aux = aux.map(e => this.renderObject(e) ).map( e => this.translateObject(e))
    this.excelService.exportAsExcelFile( aux, "report-"+ this.export, this.export );
  }


  private renameField(o : any , oldName : string , newName : string){
    let result = Object.assign({}, o)
    result[newName]=result[oldName];
    delete result[oldName];
    return result;
  }

  private translateObject(o : any ){
    let result = Object.assign({}, o);
    Object.keys(result).forEach(
      e => {
        result = this.renameField(result, e, this.t.transform(e) )
      })
    return result;
  }

  private renderObject(o : any){
    let result = Object.assign({}, o)
    this.config.export_fields.forEach(
      e => result[e.key] = e.render(result)
    )
    return result ;
  }

}

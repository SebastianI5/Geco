import { Component, Input, OnInit, Output } from '@angular/core';
import { BusService, RELOAD_EVENT } from 'src/app/bus.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  disable_route: false;

  list : any [] = [];

  common_params = {
    offset:  0,
    limit: 10,
    sort: 'id',
    direction: 'asc'
  }

  @Input()
  config: any;

  @Input()
  params: any;

  @Input()
  load: any;

  @Input()
  navigate: any;

  constructor(private bus: BusService) { }

  async ngOnInit() {
    this.bus.subscribe(RELOAD_EVENT, () => this.load_list());
    await this.load_list();
  }


  async pageChanged(e){
    this.common_params.offset = e.pageIndex * e.pageSize;
    this.common_params.limit = e.pageSize;
    await this.load_list();
  }

  resetOffset(){
    this.common_params.offset = 0;
  }

  async sort(e){
    this.common_params.sort = e.active;
    this.common_params.direction = e.direction;
    this.resetOffset();
    await this.load_list();
  }

  table_fields(){
    return this.config.table_fields.map(e => e.label);
  }

  async load_list(){
    this.disable_route = false;
    this.list = await this.load(Object.assign(this.common_params, this.params));
  }


}

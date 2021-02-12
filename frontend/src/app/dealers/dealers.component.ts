import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DealerService } from '../dealer.service';

@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.css']
})
export class DealersComponent implements OnInit {

  list : any [] = [];


  params = {
    id: "",
    description_like: "",
    offset:  0,
    limit: 10,
    sort: 'id',
    direction: 'asc'
  }

  constructor(private d: DealerService, private router: Router) { }

  ngOnInit(): void {
    this.load();
  }

  async load() {
    this.list = await this.d.list(this.params);
  }

  navigate(row){
    this.router.navigate(['/dealers/' + row.id]);
  }

  pageChanged(e){
    this.params.offset = e.pageIndex * e.pageSize;
    this.params.limit = e.pageSize;
    this.load();
  }

  resetOffset(){
    this.params.offset = 0;
  }

  sort(e){
    this.params.sort = e.active;
    this.params.direction = e.direction;
    this.resetOffset();
    this.load();
  }

}

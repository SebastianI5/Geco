import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DealerService } from '../dealer.service';

@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.css']
})
export class DealersComponent implements OnInit {

  config: any = {
    search_params: [{
      label: "dealer",
      field: "id"
    },{
      label: "description",
      field: "description_like"
    }],
    table_fields: [{
      label: "id",
      field: "id",
      classes: ""
    },{
      label: "description",
      field: "description",
      classes: ""
    },{
      label: "status",
      render: (row) => row.status.description,
      classes: "xs"
    }]  
  };  

  params = {
    id: "",
    description_like: ""
  }

  constructor(private d: DealerService, private router: Router) { }

  ngOnInit(): void {}

  async load(params) {
    return await this.d.list(params);
  }

  navigate(row){
    this.router.navigate(['/dealers/'+row.id]);
  }

}

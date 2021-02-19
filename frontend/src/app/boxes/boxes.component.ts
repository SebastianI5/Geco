import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoxesService } from '../boxes.service';
import { TPipe } from '../t.pipe';


@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {

  config: any = {
    search_params: [{
      label: "id",
      field: "id"
    }],
    table_fields: [{
      label: "box",
      field: "id",
      classes: ""
    },{
      label: "status",
      render: (row) => this.t.transform("box_status_" + row.status),
      classes: ""
    },{
      label: "user",
      field: "username",
      classes: ""
    },{
      label: "created_at",
      render: (row) => this.date.transform(row.created_at),
      classes: ""
    },{
      label: "sent_at",
      render: (row) => this.date.transform(row.sent_at),
      classes: "xs"
    },{
      label: "received_at",
      render: (row) => this.date.transform(row.received_at),
      classes: "xs"
    },{
      label: "updated_at",
      render: (row) => this.date.transform(row.updated_at),
      classes: "xs"
    }]  
  };  

  params = {
    id: ""
  }

  constructor(private b: BoxesService, 
      private router: Router, 
      private date: DatePipe,
      private t: TPipe) { }

  ngOnInit(): void {
   
  }

  async load(params) {
    console.log("caricamento")
    return await this.b.list(params);
  }

  navigate(row){
    this.router.navigate(['/boxes/'+row.id]);
  }

}

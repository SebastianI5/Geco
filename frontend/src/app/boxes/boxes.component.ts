import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoxesService } from '../boxes.service';
import { BusService, RELOAD_EVENT } from '../bus.service';
import { TPipe } from '../t.pipe';
import { user } from '../util';


@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {

  config: any = {
    //stato, data creazione, utente, def: le mie scatole
    search_params: [{
      label: "id",
      field: "id"
    },{
      label: "status",
      field: "status"
    },{
      label: "created_at",
      field: "created_at"
    },{
      label: "username",
      field: "username_like"
    }],
    table_fields: [{
      label: "box",
      field: "id",
      classes: "",
      sortable: true
    },{
      label: "status",
      render: (row) => this.t.transform("box_status_" + row.status),
      classes: ""
    },{
      label: "user",
      field: "username",
      classes: "",
      sortable: true
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
      classes: "xs",
      sortable: true
    },{
      label: "updated_at",
      render: (row) => this.date.transform(row.updated_at),
      classes: "xs"
    }, {
      label: "action",
      actions: [{ action: (row) => this.next_status(row, "SCATOLA.DAINVIARE"), 
                    icon: "forward", 
                    color: "primary",
                    title: "close_box",
                    condition: (row) => row.status == "SCATOLA.NEW" },
                { action: (row) => this.next_status(row, "SCATOLA.INVIATA"), 
                    icon: "forward", 
                    color: "primary",
                    title: "send_box",
                    condition: (row) => row.status == "SCATOLA.DAINVIARE" },
                { action: (row) => this.next_status(row, "SCATOLA.RICEVUTA"), 
                    icon: "forward", 
                    color: "primary",
                    title: "received_box",
                    condition: (row) => row.status == "SCATOLA.INVIATA" },
                { action: (row) => this.next_status(row, "SCATOLA.SCAN"), 
                    icon: "forward", 
                    color: "primary",
                    title: "working_box",
                    condition: (row) => row.status == "SCATOLA.RICEVUTA" }
      ],
      classes: ""
    }]  
  };  

  params = {
    id: "",
    username_like: user()["name"]
  }

  constructor(private b: BoxesService, 
      private router: Router, 
      private date: DatePipe,
      private t: TPipe,
      private bus: BusService) { }

  ngOnInit(): void {
   
  }

  async load(params) {
    console.log("caricamento")
    return await this.b.list(params);
  }

  navigate(row){
    this.router.navigate(['/boxes/'+row.id]);
  }

  async next_status(row, status){
    console.log("hello");
    await this.b.put(row.id, {"status": status});
    this.bus.publish(RELOAD_EVENT);
  }

}

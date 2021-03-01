import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoxesService } from '../boxes.service';
import { BusService, RELOAD_EVENT } from '../bus.service';
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
                    class: "warning",
                    title: "close_box",
                    condition: (row) => row.status == "SCATOLA.NEW" },
                { action: (row) => this.next_status(row, "SCATOLA.INVIATA"), 
                    icon: "forward", 
                    class: "warning",
                    title: "send_box",
                    condition: (row) => row.status == "SCATOLA.DAINVIARE" },
                { action: (row) => this.next_status(row, "SCATOLA.RICEVUTA"), 
                    icon: "forward", 
                    class: "warning",
                    title: "received_box",
                    condition: (row) => row.status == "SCATOLA.INVIATA" },
                { action: (row) => this.next_status(row, "SCATOLA.SCAN"), 
                    icon: "forward", 
                    class: "warning",
                    title: "working_box",
                    condition: (row) => row.status == "SCATOLA.RICEVUTA" }
      ],
      classes: ""
    }]  
  };  

  params = {
    id: ""
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
    await this.b.put(row.id, {"status": status});
    this.bus.publish(RELOAD_EVENT);
  }

}

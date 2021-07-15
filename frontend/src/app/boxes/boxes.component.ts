 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService, default_render, PAGE_CHANGE, RELOAD_EVENT, TPipe, user } from '@eng';
import { BoxesService } from '../boxes.service';
import { BOXES_STATUS } from '../const';
import { GecoDatePipe } from '../geco-date.pipe';


@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {


  exportName = "Boxes"

  config: any = {
    //stato, data creazione, utente, def: le mie scatole
    search_params: [{
      label: "id",
      field: "id",
      text : "id",
      type : "number"
    },{
      label: "status",
      field: "status",
      select: BOXES_STATUS
    },{
      label: "username",
      field: "username",
      text : "username"
    }],
    table_fields: [{
      label: "id",
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
      render: (row) => this.date.transform(row.created_at, "medium"),
      classes: "xs",
      sortable: true
    },{
      label: "sent_at",
      render: (row) => this.date.transform(row?.history?.find( e => e.new == "SCATOLA.INVIATA" )?.at ),
      classes: "xs"
    },{
      label: "received_at",
      render: (row) => this.date.transform(row?.history?.find( e => e.new == "SCATOLA.RICEVUTA" )?.at),
      classes: "xs"
    },{
      label: "updated_at",
      render: (row) => this.date.transform(row?.history?.map( e => e.at ).sort((a,b) => a > b ? 1 : -1 )[0] ),
      classes: "xs"
    }, {
      label : "num_contracts",
      field : "qty_contracts",
      classes: "xs"
    },{
      label: "action",
      actions: [{ action: (row) => this.next_status(row, "SCATOLA.DAINVIARE"),
                    icon: "forward",
                    color: "primary",
                    classes : "table-btn",
                    title: "close_box",
                    condition: (row) => row.status == "SCATOLA.NEW" },
                { action: (row) => this.next_status(row, "SCATOLA.INVIATA"),
                    icon: "forward",
                    color: "primary",
                    classes : "table-btn",
                    title: "send_box",
                    condition: (row) => row.status == "SCATOLA.DAINVIARE" },
                { action: (row) => this.next_status(row, "SCATOLA.RICEVUTA"),
                    icon: "forward",
                    color: "primary",
                    classes : "table-btn",
                    title: "received_box",
                    condition: (row) => row.status == "SCATOLA.INVIATA" },
                { action: (row) => this.next_status(row, "SCATOLA.SCAN"),
                    icon: "forward",
                    color: "primary",
                    classes : "table-btn",
                    title: "working_box",
                    condition: (row) => row.status == "SCATOLA.RICEVUTA" }
      ],
      classes : ""
    }],
    export_fields : [
      {
        key: "box",
        render : default_render("id")
      },
      {
        key: "status",
        render : default_render("status")
      },
      {
        key: "user",
        render : default_render("username")
      },
      {
        key: "created_at",
        render : (row)=> this.date.transform(row.created_at)
      },
      {
        key: "sent_at",
        render: (row) => this.date.transform(row?.history?.find( e => e.new == "SCATOLA.INVIATA" )?.at )
      },{
        key: "received_at",
        render: (row) => this.date.transform(row?.history?.find( e => e.new == "SCATOLA.RICEVUTA" )?.at)
      },{
        key: "updated_at",
        render: (row) => this.date.transform(row?.history?.map( e => e.at ).sort((a,b) => a > b ? 1 : -1 )[0] )
      }, {
        key : "num_contracts",
        render : default_render("qty_contracts")
      }
    ]
  };

  params = {
    id: "",
    username : user()["name"],
    sort: "id",
    direction: "desc"
  }

  constructor(private b: BoxesService,
      private router: Router,
      private date: GecoDatePipe,
      private t: TPipe,
      private bus: BusService) { }

  ngOnInit(): void {
      this.bus.publish(PAGE_CHANGE, "boxes");
  }

  async load(params) {
    return await this.b.list(params);
  }

  navigate(row){
    this.router.navigate(['/boxes/'+row.id]);
  }

  async next_status(row, status){
    await this.b.put(row.id, {"status": status});
    this.bus.publish(RELOAD_EVENT);
  }

  new_box = async() => {
    await this.b.post({});
    this.bus.publish(RELOAD_EVENT);
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuditService } from '../audit.service';
import { BusService, PAGE_CHANGE } from '../bus.service';
import { TPipe } from '../t.pipe';
import { default_render } from '../util';
import { METHODS, STATUS } from './audit.const';

@Component( {
  selector: 'app-audit',
  templateUrl: './audits.component.html',
  styleUrls: ['./audits.component.css']
} )
export class AuditsComponent implements OnInit {

  exportName = "audit"

  config: any = {
    search_params: [
      {
        label: "username",
        field: "username_like",
        text: "username"
      },
      {
        label: "url",
        field: "url_like",
        text: "url"
      },
      {
        label: "method",
        field: "method",
        select: METHODS
      },
      {
        label: "status",
        field: "status",
        select: STATUS
      }, {
        label: "at",
        date: {
          start: "at_start",
          end: "at_end"
        }
      }
    ],
    table_fields: [
      {
        label: "id",
        render: (row) => row["id"].substring(0,6)
      },
      {
        label: "username",
        render: default_render( "username" )
      }, {
        label: "url",
        render: default_render( "url" )
      }
      , {
        label: "method",
        render: default_render( "method" )
      }, {
        label: "status",
        render: (row ) => this.t.transform( "http_status_" + row["status"])
      }, {
        label: "at",
        render: default_render("at")
      }
    ],
    export_fields: [
      {
        label: "id",
        render: default_render( "id" )
      },
      {
        label: "username",
        render: default_render("username")
      }, {
        label: "at",
        render: default_render("at")
      }, {
        label: "url",
        render: default_render( "url" )
      }
      , {
        label: "method",
        render: default_render( "method" )
      }, {
        label: "status",
        render: default_render( "status" )
      }, {
        label: "request",
        render: default_render( "request" )
      }, {
        label: "response",
        render: default_render( "response" )
      }
    ],
    color_class: ( row ) => this.get_color( row )
  }


  params = {}

  constructor( private a: AuditService, private t: TPipe, private bus : BusService, private router: Router   ) { }

  ngOnInit(): void {
    this.bus.publish(PAGE_CHANGE, "audits")
  }

  load( params ) {
    return this.a.list( params );
  }

  navigate(row){
    this.router.navigate(["audits/" + row.id])
  }

  get_color( row ) {
    let status = JSON.parse(row.status);
    if(status.toString().indexOf('40') > -1){
      return 'yellow-row'
    } else if (status.toString().indexOf('50') > -1){
      return 'red-row'
    }
  }


}

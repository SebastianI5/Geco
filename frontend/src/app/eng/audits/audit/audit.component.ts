import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuditService } from '../../audit.service';
import { BusService, PAGE_CHANGE } from '../../bus.service';



function partial_object( object :any  , fields : string[] ){
  return fields.reduce( (acc,curr) => { acc[curr] = object[curr]; return acc } , {} )
}

function remove_arrays(object : any, fields : string[]){
  let res = Object.assign({}, object);
  fields.forEach(k => object[k]?.length == 1 ? res[k] = object[k][0] : null  )
  return res
}

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

  message = {}
  info = {}

  constructor(private a: ActivatedRoute, private audit : AuditService, private bus : BusService) { }

  async ngOnInit() {
    this.bus.publish(PAGE_CHANGE, "audit")
    this.message = await this.audit.get(this.a.snapshot.params.id)
    this.message['request'] = JSON.parse(this.message['request'])
    this.message['response'] = JSON.parse(this.message['response'])
    this.info = partial_object(this.message , ["id", "username", "url", "at", "method", "status"])
    this.message["request"] = remove_arrays(this.message["request"],
     ["offset", "limit", "sort", "direction", "urgent", "arrived_is_not_null", "arrived_start", "arrived_end", "created_start", "created_end"] )
  }

}

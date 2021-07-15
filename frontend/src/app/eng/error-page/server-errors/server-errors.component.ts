import { Component, OnInit } from '@angular/core';
import { BusService, PAGE_CHANGE, SERVER_ERROR } from '../../bus.service';

@Component({
  selector: 'app-server-errors',
  templateUrl: './server-errors.component.html',
  styleUrls: ['./server-errors.component.css']
})
export class ServerErrorsComponent implements OnInit {

  error = null;

  constructor(private bus: BusService) { }

  ngOnInit(): void {
    this.bus.subscribe(SERVER_ERROR, this.e_se.bind(this));
  }

  e_se(event, error){
    this.error = error
    if(!error) return;
     this.bus.publish(PAGE_CHANGE, "server_error");
  }

}

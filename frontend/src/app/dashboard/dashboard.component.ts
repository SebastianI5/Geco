 import { Component, OnInit } from '@angular/core';
import { BusService, PAGE_CHANGE } from '@eng';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent   implements OnInit {

  constructor(private bus: BusService){}

  ngOnInit(): void {
    this.bus.publish(PAGE_CHANGE, "dashboard");
  }




}

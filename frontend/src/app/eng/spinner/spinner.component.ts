import { Component, OnInit } from '@angular/core';
import { BusService, LOADED, LOADING } from '../bus.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  
  show = 0;
  
  constructor(private bus: BusService) { }
  
  ngOnInit(): void {
    this.bus.subscribe(LOADING, (() => this.show ++).bind(this));
    this.bus.subscribe(LOADED, (() => this.show --).bind(this))
  }

}

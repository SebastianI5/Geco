import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dealer-mandates',
  templateUrl: './dealer-mandates.component.html',
  styleUrls: ['./dealer-mandates.component.css']
})
export class DealerMandatesComponent implements OnInit {

  @Input()
  dealer: any;
  constructor() { }

  ngOnInit(): void {
  }

}

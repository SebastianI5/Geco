import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dealer-structures',
  templateUrl: './dealer-structures.component.html',
  styleUrls: ['./dealer-structures.component.css']
})
export class DealerStructuresComponent implements OnInit {

  @Input()
  dealer: any;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { brand_image } from '../util';

@Component({
  selector: 'app-dealer-mandates',
  templateUrl: './dealer-mandates.component.html',
  styleUrls: ['./dealer-mandates.component.css']
})
export class DealerMandatesComponent implements OnInit {

  @Input()
  dealer: any;

  brand_image = brand_image
  constructor() { }

  ngOnInit(): void {
  }

}

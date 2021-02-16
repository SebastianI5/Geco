import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-dealer-info',
  templateUrl: './dealer-info.component.html',
  styleUrls: ['./dealer-info.component.css']
})
export class DealerInfoComponent implements OnInit {

  @Input()
  dealer: any;
  list: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.list=[
      {"label": "vat_code", "value": this.dealer.vatcode},
      {"label": "market", "value": this.dealer.market},
      {"label": "sales_manager", "value": this.dealer.respsales},
      {"label": "after_sales_manager", "value": this.dealer.respaftersales},
      {"label": "category", "value": this.dealer.category}
    ]
  }



}

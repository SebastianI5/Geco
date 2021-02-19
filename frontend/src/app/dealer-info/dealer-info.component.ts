import { Component, Input, OnInit } from '@angular/core';
import { TPipe } from '../t.pipe';


@Component({
  selector: 'app-dealer-info',
  templateUrl: './dealer-info.component.html',
  styleUrls: ['./dealer-info.component.css']
})
export class DealerInfoComponent implements OnInit {

  @Input()
  dealer: any;
  list: any[] = [];

  constructor(private t: TPipe) { }

  ngOnInit(): void {
    this.list=[
      {"label": "vat_code", "value": this.dealer.vatcode},
      {"label": "market", "value": this.t.transform("market_" + this.dealer.market)},
      {"label": "sales_manager", "value": this.dealer.salesmanager},
      {"label": "after_sales_manager", "value": this.dealer.aftersalesmanager},
      {"label": "category", "value": this.dealer.category}
    ]
  }



}

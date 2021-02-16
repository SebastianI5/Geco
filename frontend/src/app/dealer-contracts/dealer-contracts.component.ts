import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DealerService } from '../dealer.service';

@Component({
  selector: 'app-dealer-contracts',
  templateUrl: './dealer-contracts.component.html',
  styleUrls: ['./dealer-contracts.component.css']
})
export class DealerContractsComponent implements OnInit {

  @Input()
  dealer: any;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { brand_image } from '../util';

@Component({
  selector: 'app-dealer-contracts',
  templateUrl: './dealer-contracts.component.html',
  styleUrls: ['./dealer-contracts.component.css']
})
export class DealerContractsComponent implements OnInit {

  @Input()
  dealer: any;

  brand_image = brand_image

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(e){
    // "'/dealers/' + dealer.id + '/contracts/' + e.id + '/documents'"
    this.router.navigate(['/dealers/' + e.dealer_id + '/contracts/' + e.id + '/documents']);
  }

}

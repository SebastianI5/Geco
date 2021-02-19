import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoverService } from '../cover.service';
import { user } from 'src/app/util';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  cover: any = {};


  constructor(private a: ActivatedRoute, private c: CoverService) { }

  async ngOnInit() {
    let params = {
      dealer_id: this.a.snapshot.queryParams.dealer_id,
      brand_id: this.a.snapshot.queryParams.brand_id,
      service_id: this.a.snapshot.queryParams.service_id,
      market: this.a.snapshot.queryParams.market,
      username: user()['name'],
      limit: 1000,
      available: true
    }
    this.cover = {
      dealer_id: this.a.snapshot.queryParams.dealer_id,
      brand: this.a.snapshot.queryParams.brand,
      service: this.a.snapshot.queryParams.service,
      market: this.a.snapshot.queryParams.market,
    }
    let covers = await this.c.list(params);
    console.log(covers);
  }



}

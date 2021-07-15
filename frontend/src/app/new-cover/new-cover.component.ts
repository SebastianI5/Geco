import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '@eng';
import { CoverService } from '../cover.service';

@Component( {
  selector: 'app-new-cover',
  templateUrl: './new-cover.component.html',
  styleUrls: ['./new-cover.component.css']
} )
export class NewCoverComponent implements OnInit {

  constructor( private c: CoverService, private router: Router, private a: ActivatedRoute ) { }

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
    let covers = await this.c.list( params );
    let cover = covers.length >= 1 ? covers[0] : await this.c.post( params );;
    await this.router.navigate( ['/covers/' + cover.id] , {replaceUrl: true})
  }

}

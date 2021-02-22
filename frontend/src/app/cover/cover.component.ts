import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoverService } from '../cover.service';
import { user } from 'src/app/util';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  cover: any = {};


  constructor(
    private a: ActivatedRoute,
     private c: CoverService,
     private router : Router
     ) { }

  async ngOnInit() {
    if (this.a.snapshot.params.id == "_new") {
      this.new_cover()
    }
    else {
      this.cover = await this.c.get(this.a.snapshot.params.id)
    }
  }

  async new_cover(){
    let params = {
      dealer_id: this.a.snapshot.queryParams.dealer_id,
      brand_id: this.a.snapshot.queryParams.brand_id,
      service_id: this.a.snapshot.queryParams.service_id,
      market: this.a.snapshot.queryParams.market,
      username: user()['name'],
      limit: 1000,
      available: true
    }
    let covers = await this.c.list(params);
    this.cover = covers.length >= 1 ? covers[0] : await this.c.post(params); ;
    this.router.navigate(['/covers/' + this.cover.id ])

  }

}

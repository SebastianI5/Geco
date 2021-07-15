import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusService, PAGE_CHANGE } from '@eng';
import { DealerService } from '../dealer.service';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit {


  constructor(
    private d: DealerService,
    private a: ActivatedRoute,
    private bus: BusService) { }

  ngOnInit(): void {
    this.load();
    this.bus.publish(PAGE_CHANGE, "dealer");
  }

  dealer: any = null;

  async load() {
    this.dealer = await this.d.get(this.a.snapshot.params.id);
  }

}

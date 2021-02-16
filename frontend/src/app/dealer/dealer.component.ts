import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DealerService } from '../dealer.service';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit {


  constructor(
    private d: DealerService, 
    private a: ActivatedRoute) { }

  ngOnInit(): void {
    this.load();
  }

  dealer: any = null;

  async load() {
    this.dealer = await this.d.get(this.a.snapshot.params.id);    
  }

}

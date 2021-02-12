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

  list: any[] = [];
  errorMessage: string = "";

  constructor(
    private d: DealerService, 
    private a: ActivatedRoute, 
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.load();
  }

  dealer: any = {};

  async load() {
    this.dealer = await this.d.get(this.a.snapshot.params.id);
    if(this.dealer.error){
      this.errorMessage = this.dealer.error.message;
      this.openSnackBar(this.errorMessage, "");
    } else {
      this.list.push({"label": "VAT code", "value": this.dealer.vatcode});
      this.list.push({"label": "Market", "value": this.dealer.market});
      this.list.push({"label": "Sales manager", "value": this.dealer.respsales});
      this.list.push({"label": "After sales manager", "value": this.dealer.respaftersales});
      this.list.push({"label": "Category", "value": this.dealer.category});
    }
    
    
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
    this.router.navigate(['/dealers/']);
  }

}

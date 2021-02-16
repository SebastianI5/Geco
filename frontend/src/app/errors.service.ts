import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor(private snackBar: MatSnackBar,
              private router: Router) { }

  async openSnackBar(message: string, action: string) {
    await this.snackBar.open(message, action, {
    }).afterDismissed().toPromise();
    this.router.navigate(['/dealers/']);
  }

}

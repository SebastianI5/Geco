import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirmation-bottomsheet',
  templateUrl: './confirmation-bottomsheet.component.html',
  styleUrls: ['./confirmation-bottomsheet.component.css']
})
export class ConfirmationBottomsheetComponent implements OnInit {

  config = this.data.config
  message_type = typeof this.data.config.message

  constructor(
    @Inject( MAT_BOTTOM_SHEET_DATA ) public data: any,
    private _bottomSheetRef: MatBottomSheetRef<ConfirmationBottomsheetComponent>
  ) { }

  ngOnInit(): void {
  }

  decline(){
     this._bottomSheetRef.afterDismissed()
    .subscribe(
      res => this.config.decline.action(res)
    )
    this._bottomSheetRef.dismiss( this.data.payload )
  }

  confirm(){
     this._bottomSheetRef.afterDismissed()
    .subscribe(
      res => this.config.confirm.action(res)
    )
    this._bottomSheetRef.dismiss( this.data.payload )
  }

}

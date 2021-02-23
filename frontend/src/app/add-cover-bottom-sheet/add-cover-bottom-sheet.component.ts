import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { CoverService } from '../cover.service';
import { BusService, RELOAD_EVENT } from 'src/app/bus.service';

@Component({
  selector: 'app-add-cover-bottom-sheet',
  templateUrl: './add-cover-bottom-sheet.component.html',
  styleUrls: ['./add-cover-bottom-sheet.component.css']
})
export class AddCoverBottomSheetComponent implements OnInit{

  list: any[];

  constructor(private c: CoverService,
    private date: DatePipe,
    private _bottomSheetRef: MatBottomSheetRef<AddCoverBottomSheetComponent>,
    private bus: BusService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit(): void {
    this.load();
  }

  async load() {
    this.list = await this.c.list({box_id_null: true});
  }

  async add_cover(cover){
    await this.c.put(cover.id, {"box_id":this.data} );
    await this.bus.publish(RELOAD_EVENT);
    this._bottomSheetRef.dismiss();
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { CoverService } from '../cover.service';
import { BusService, RELOAD_EVENT } from '@eng';
import { brand_image } from '../util';

@Component( {
  selector: 'app-add-cover-bottom-sheet',
  templateUrl: './add-cover-bottom-sheet.component.html',
  styleUrls: ['./add-cover-bottom-sheet.component.css']
} )
export class AddCoverBottomSheetComponent implements OnInit {

  list: any[];
  brand_image = brand_image

  constructor( private c: CoverService,
    private _bottomSheetRef: MatBottomSheetRef<AddCoverBottomSheetComponent>,
    private bus: BusService,
    @Inject( MAT_BOTTOM_SHEET_DATA ) public data: any ) { }

  ngOnInit(): void {
    this.load();
  }

  async load() {
    this.list = this.data.list
  }

  async add_cover( cover ) {
    await this.c.put( cover.id, { "box_id": this.data.id } );
    await this.bus.publish( RELOAD_EVENT );
    this._bottomSheetRef.dismiss();
  }

  async add_all() {
    this.list.forEach( async e => await this.c.put( e.id, { "box_id": this.data.id } ) );
    await this.bus.publish( RELOAD_EVENT );
    this._bottomSheetRef.dismiss();
  }

}

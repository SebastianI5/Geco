import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { CoverService } from '../cover.service';
import { BusService, RELOAD_EVENT } from 'src/app/bus.service';
import { DocumentTypesService } from '../document-types.service';

@Component({
  selector: 'app-add-doc-type-bottom-sheet',
  templateUrl: './add-doc-type-bottom-sheet.component.html',
  styleUrls: ['./add-doc-type-bottom-sheet.component.css']
})
export class AddDocTypeBottomSheetComponent implements OnInit{



  list: any[];
  x: string;
  categories: any[];
  selected_category: string;

  constructor(private d: DocumentTypesService, 
    private c: CoverService, 
    private date: DatePipe,
    private _bottomSheetRef: MatBottomSheetRef<AddDocTypeBottomSheetComponent>,
    private bus: BusService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit(): void {
    this.load();
  }

  async load() {
    this.list = await this.d.list({box_id_null: true, limit: 1000});
    this.categories = this.list
      .map(e => e.category)
      .reduce((r, e) => {r.add(e); return r}, new Set())
    
  }

  async add_doc_type(doc_type){
    console.log(this.data);
    await this.c.put(doc_type.document_types, this.data);
    await this.bus.publish(RELOAD_EVENT);
    this._bottomSheetRef.dismiss();
  }

}

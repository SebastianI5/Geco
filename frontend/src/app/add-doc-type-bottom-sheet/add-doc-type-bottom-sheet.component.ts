 import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { CoverService } from '../cover.service';
import { BusService, RELOAD_EVENT } from '@eng';
import { DocumentTypesService } from '../document-types.service';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from '@eng';
import { GecoDatePipe } from '../geco-date.pipe';

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
  mandatory = "";
  isMandatory = false ;

  constructor(private d: DocumentTypesService,
    private c: CoverService,
    private date: GecoDatePipe,
    private _bottomSheetRef: MatBottomSheetRef<AddDocTypeBottomSheetComponent>,
    private bus: BusService,
    private a: ActivatedRoute,
    private filter: FilterPipe,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.list = this.data.list
    this.categories = this.list
      .map(e => e.category)
      .reduce((r, e) => {r.add(e); return r}, new Set())

  }

  async add_doc_type(doc_type){
    if (! this.data.doc_types ){
      this.data.doc_types = []
    }
    this.data.doc_types = this.data.doc_types.concat(doc_type);

    await this.c.put(this.data.id, { "box_id" : this.data.box_id , "document_types": this.data.doc_types? this.data.doc_types.map(i => i.id) : []  });
    await this.bus.publish(RELOAD_EVENT);
    this._bottomSheetRef.dismiss();
  }

  toggleMandatory(){
    this.isMandatory = this.isMandatory ? false : true ;
    this.mandatory = this.isMandatory ? "1" : "";
  }


  add_all(){
    let list = this.filter.transform(this.list, this.selected_category, ['category']);
    list = this.filter.transform(list, this.x, ['id','description']);
    this.add_doc_type(list);
  }

}

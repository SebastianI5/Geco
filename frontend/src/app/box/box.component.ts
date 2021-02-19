import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { AddCoverBottomSheetComponent } from '../add-cover-bottom-sheet/add-cover-bottom-sheet.component';
import { BoxesService } from '../boxes.service';
import { CoverService } from '../cover.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  box: any;
  config: any = {
    search_params: [],
    table_fields: [{
      label: "id",
      field: "id",
      classes: ""
    },{
      label: "market",
      field: "market",
      classes: ""
    },{
      label: "service",
      field: "service",
      classes: ""
    },{
      label: "brand",
      field: "brand",
      classes: ""
    },{
      label: "dealer",
      field: "dealer",
      classes: ""
    },{
      label: "created_at",
      render: (row) => this.date.transform(row.created_at),
      classes: ""
    }]  
  };  

  params = {}

  constructor(private b: BoxesService,
    private c: CoverService,
    private a: ActivatedRoute,
    private date: DatePipe,
    private bs: MatBottomSheet) { }

  ngOnInit(): void {
    this.load();
  }

  async load(){
    this.box = await this.b.get(this.a.snapshot.params.id);
  }

  navigate(){  }

  async load_covers(){
    return await this.c.list({box_id: this.a.snapshot.params.id});
  }

  openBottomSheet(): void {
    this.bs.open(AddCoverBottomSheetComponent, {
      data: this.a.snapshot.params.id
    });
  }

}

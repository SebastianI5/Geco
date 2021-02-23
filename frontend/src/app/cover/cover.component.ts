import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoverService } from '../cover.service';
import { user } from 'src/app/util';
import { DatePipe } from '@angular/common';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BusService, RELOAD_EVENT } from '../bus.service';
import { DocumentTypesService } from '../document-types.service';
import { AddDocTypeBottomSheetComponent } from '../add-doc-type-bottom-sheet/add-doc-type-bottom-sheet.component';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {


  cover: any = {};

  config: any = {
    search_params: [],
    table_fields: [{
      label: "id",
      field: "id",
      classes: ""
    },{
      label: "service",
      field: "service_id",
      classes: ""
    },{
      label: "type",
      field: "type",
      classes: ""
    },{
      label: "sort",
      field: "sort",
      classes: ""
    },{
      label: "mandatory",
      field: "mandatory",
      classes: ""
    },{
      label: "action",
      actions: [ {action: (row) => this.remove_doc_type(row.id), icon: "delete", class:"red"}
                ],
      classes: ""
    }]
  };

  params = {}


  constructor(
    private a: ActivatedRoute,
    private c: CoverService,
    private d: DocumentTypesService,
    private router : Router,
    private date: DatePipe,
    private bs: MatBottomSheet,
    private bus: BusService
    ) { }

  

  async ngOnInit() {
    if (this.a.snapshot.params.id == "_new") {
      this.new_cover();
    }
    else {
      this.load();
    }
  }

  async load(){
    this.cover = await this.c.get(this.a.snapshot.params.id)
  }

  async new_cover(){
    let params = {
      dealer_id: this.a.snapshot.queryParams.dealer_id,
      brand_id: this.a.snapshot.queryParams.brand_id,
      service_id: this.a.snapshot.queryParams.service_id,
      market: this.a.snapshot.queryParams.market,
      username: user()['name'],
      limit: 1000,
      available: true
    }
    let covers = await this.c.list(params);
    this.cover = covers.length >= 1 ? covers[0] : await this.c.post(params); ;
    this.router.navigate(['/covers/' + this.cover.id ])

  }

  navigate(){}

  async load_document_types(){
    return (await this.c.get(this.a.snapshot.params.id)).document_types;
  }

  openBottomSheet(){
    this.bs.open(AddDocTypeBottomSheetComponent, {
      data: this.a.snapshot.params.id
    });
  }

  async remove_doc_type(id: string){
    await this.c.put( id, null);
    await this.bus.publish(RELOAD_EVENT);
  }

}

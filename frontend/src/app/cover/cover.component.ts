import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddDocTypeBottomSheetComponent } from '../add-doc-type-bottom-sheet/add-doc-type-bottom-sheet.component';
import { brand_image } from '../util';
import { CoverService } from '../cover.service';
import { DocumentTypesService } from '../document-types.service';
import { AddBottomsheetComponent, BusService, PAGE_CHANGE, pdf, RELOAD_EVENT, timestamp, TPipe } from '@eng';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  cover: any = { id: "_new" };
  document_types: any[] = [];
  remaining_types: any[] = [];
  token: string;

  brand_image = brand_image

  disableSelectButton = true;

  config: any = {
    search_params: [],
    table_fields: [{
      label: "empty_string",
      checkbox: (row) => this.toggleSelection(row)
    }, {
      label: "category",
      render: (row) => this.t.transform(row.category),
      classes: ""
    }, {
      label: "description",
      field: "description",
      classes: ""
    }, {
      label: "attachment",
      field: "attachment",
      classes: "xs"
    }, {
      label: "action",
      actions: [{
        action: (row) => this.remove_doc_type(row.id),
        icon: "delete",
        title: "empty_string",
        condition: (_) => true
      }
      ]
    }]

  };

  params = {}


  constructor(
    private a: ActivatedRoute,
    private c: CoverService,
    private doc: DocumentTypesService,
    private bs: MatBottomSheet,
    private bus: BusService,
    private t: TPipe,
  ) { }



  async ngOnInit() {


    this.load();
    this.token = localStorage.getItem("access_token");
    this.bus.publish(PAGE_CHANGE, "cover");
  }

  async load() {
    this.cover = await this.c.get(this.a.snapshot.params.id);
    this.checkBtn()
  }


  checkBtn() {
    this.disableSelectButton = this.document_types.filter(e => e.selected).length <= 0
  }

  toggleSelection(row) {
    row.selected = row.selected ? false : true;
    this.checkBtn()
  }

  async load_document_types(params) {
    this.document_types = (await this.c.get(this.a.snapshot.params.id))?.document_types;
    this.document_types = this.document_types ? this.document_types : [];
    this.remaining_types = await this.doc.list(
      {
        box_id_null: true,
        service_id: this.cover?.service_id,
        limit: 100, existing: this.document_types ? this.document_types.map(i => i.id) : []
      })
    this.document_types.sort((a, b) => a.sort > b.sort ? 1 : -1)
    this.checkBtn()
    return this.document_types?.slice(params.offset, params.offset + params.limit);
  }

  openBottomSheet = () => {
    this.bs.open(AddDocTypeBottomSheetComponent, {
      panelClass: 'width-doc-type-bottom-sheet',
      data: { "id": this.a.snapshot.params.id, "box_id": this.cover.box_id, "doc_types": this.document_types, "list": this.remaining_types, "service_id": this.cover.service_id }
    });
  }


  async remove_doc_type(id: string) {
    this.document_types = this.document_types.filter(d => d.id != id);
    await this.c.put(this.a.snapshot.params.id, { "box_id": this.cover.box_id, "document_types": this.document_types ? this.document_types.map(i => i.id) : [] });
    await this.bus.publish(RELOAD_EVENT);
  }


  downloadPdf(list){
    let template = [{
        type: "barcode",
        key: "barcode",
        x: 10,
        y: 20,
        w: 190,
        h: 30
      },{
        type: "table",
        key: "tabella",
        x: 10,
        y: 100,
      }];


    let data = list.map((e, i) => {
      let bc = ["GECO",
        this.cover.market,
        this.cover.dealer_id,
        this.cover.brand_id,
        this.cover.service_id,
        e.id,
        i+1,
        "001",
        "001"].join("-");

      let result = {
        "barcode": bc,
        "tabella": [{
              header: "Mercato",
              value: this.cover.market
            },{
              header: "Servizio",
              value: this.cover.service_id
            },{
              header: "Brand",
              value: this.cover.brand_id
            },{
              header: "Dealer",
              value: this.cover.dealer_id + " - " + this.cover.description
            },{
              header: "Documento",
              value: e.id
            }]
      }
      return result;
    })

    pdf(template, data, ['cover', this.cover.id, timestamp()].join('-'));

  }


  downloadSelectedPdf() {
    let selected = this.document_types.filter(e => e.selected);
    this.downloadPdf(selected);
  }

  downloadAllPdf() {
    this.downloadPdf(this.document_types);
  }







}

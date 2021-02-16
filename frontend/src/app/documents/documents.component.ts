import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DealerService } from '../dealer.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  list : any [] = [];

  constructor(private d: DealerService, private a: ActivatedRoute) { }

  ngOnInit(): void {
    this.load();
  }

  async load() {
    let dealer = await this.d.get(this.a.snapshot.params.id);
    let contract_id =  this.a.snapshot.params.contract_id;
    let contract = dealer["contracts"].find(e => e.id == contract_id);
    this.list = contract.documents;
  }

  first_version(versions){
    let first_version_id = Math.min(...versions.map(e => e.id));
    return versions.find(e => e.id == first_version_id);
  }

  last_version(versions){
    let last_version_id = Math.max(...versions.map(e => e.id));
    return versions.find(e => e.id == last_version_id);
  }

}

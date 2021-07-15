import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BusService, RELOAD_EVENT } from '../bus.service';

@Component( {
  selector: 'app-add-input',
  templateUrl: './add-input.component.html',
  styleUrls: ['./add-input.component.css']
} )
export class AddInputComponent implements OnInit {

  @Input()
  create: any

  @Input()
  placeholder: any

  @Input()
  title: any

  field: any = ""

  @ViewChild( 'input_id' ) input_id: ElementRef;

  constructor( private bus: BusService ) { }

  ngOnInit(): void {
  }

  submit() {
    this.create( this.field );
    this.field = "";
    this.bus.publish( RELOAD_EVENT );
    this.input_id.nativeElement.focus();
  }

}

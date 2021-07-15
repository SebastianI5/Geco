import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component( {
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
} )
export class AutocompleteComponent implements OnInit {


  @Input()
  input = ""

  @Output()
  inputChange = new EventEmitter<string>()

  inputChanged: Subject<string> = new Subject<string>();

  @ViewChild(MatAutocomplete ) autocomplete: MatAutocomplete;


  @Input()
  config: any

  options: any[] = []

  async ngOnInit() {
    this.inputChanged
      .pipe(
        debounceTime( 500 ),
        distinctUntilChanged()
      )
      .subscribe( async model => {

        this.config.field = model;
        let params = { limit: 5 }
        params[this.config.backend.field] = this.config.field
        this.options = await this.config.backend.loadFn( params );
        this.inputChange.emit( this.config.field );
      } );
  }


  async search( value: string ) {
    this.inputChanged.next( value )
  }

  display( config ) {
    return config ? ( value ) => config.frontend.displayFn( value, this.options ) : ( value ) => value
  }


  async reset( auto ) {
    console.log(auto)
    await this.search( "" )
  }



}

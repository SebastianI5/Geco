import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService, ERROR, PAGE_CHANGE } from '../bus.service';


@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  error = null;

  it_messages = {
    400: "Richiesta non valida",
    404: "Entità non trovata",
    500: "Errore interno",
    504: "Il sistema sta impiegando troppo tempo a rispondere"
  }

  en_messages = {
    400: "Bad request",
    404: "Not found",
    500: "Internal server error",
    504: "Bad gateway"
  }

  constructor(private bus: BusService, private router: Router) { }

  ngOnInit() {
    this.bus.subscribe(ERROR, this.e.bind(this));
  }

  e(event, error){
    this.error = error ? error.error : null;
    if(!error) return;
    this.bus.publish(PAGE_CHANGE, "error");
  }

  clearError(){
    this.bus.publish(ERROR, null);
    this.router.navigate(['/dashboard']);
  }



}

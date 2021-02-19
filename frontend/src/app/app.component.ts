import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { user } from './util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  showFiller = false;

  title = 'frontend';

  constructor(){}

  ngOnInit(): void {}

  
  get name(){
    return user()['name'];
  }

}




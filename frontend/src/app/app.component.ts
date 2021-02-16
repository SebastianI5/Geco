import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { user } from './util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';

  current_page = "dealers";

  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if(e instanceof NavigationEnd){
        this.current_page = e.url.substring(1).split("/")[0];
      }
    });
  }

  
  get name(){
    return user()['name'];
  }

}




import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  current_page = "dashboard";

  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if(e instanceof NavigationEnd){
        this.current_page = e.url.substring(1).split("/")[0];
      }
    });
  }
}

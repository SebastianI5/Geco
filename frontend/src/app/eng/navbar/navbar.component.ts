import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { BusService, ERROR, PAGE_CHANGE, SERVER_ERROR } from '../bus.service';
import { ConfigService } from '../config.service';
import { user } from '../authentication';

@Component({
  selector: 'eng-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    @Inject(APP_BASE_HREF) public baseHref: string,
    private configService : ConfigService,
    private bus : BusService,
    private router : Router ) { }

  @Input()
  sidenav_config : any[]

  @Input()
  menu_config : any[]

  title = 'frontend';

  current_page = "dashboard";

  error = null;

  build_time = "unknown";

  get name() {
    return user()["name"]
  }

  ngOnInit(): void {
    this.bus.subscribe(PAGE_CHANGE, this.update.bind(this));
    this.build_time = this.configService.get("build_time");

    this.bus.subscribe(ERROR, this.e_nav.bind(this));
    this.bus.subscribe(SERVER_ERROR, this.e_nav.bind(this));

    this.router.events.subscribe( e => {
      if ( e instanceof NavigationEnd ) {
         this.current_page = e.url.substring( 1 )//.split( "/" )[0];
      }
    } );
  }


  update(e, x){
    x = x.split("#")[0]
     this.current_page = x;
  }

  e_nav(event, error){
     this.error = error;
  }

  page_menu( page ) {
    // console.log("page", window.location.pathname.indexOf(page))
    // if ( window.location.pathname.indexOf(page) ) {
    if ( this.current_page == page ) {
      return "menu-active"
    }
    return ""
  }



  navigate( link ){
    this.router.navigate([link])
  }

}

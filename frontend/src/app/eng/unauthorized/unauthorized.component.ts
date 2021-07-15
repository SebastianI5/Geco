import { APP_BASE_HREF } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { logout } from '../authentication';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit {


  constructor(@Inject( APP_BASE_HREF ) public baseHref: string, private conf : ConfigService) { }

  ngOnInit(): void {
  }


  login(){
    logout(this.conf.get( "logout_url" ),  this.baseHref)

  }

}

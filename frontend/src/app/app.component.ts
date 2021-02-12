import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  get name(){
    let access_token = localStorage.getItem('access_token');
    access_token = access_token.substring(access_token.indexOf('.')+1, access_token.lastIndexOf('.'));
    access_token = atob(access_token);
    access_token = JSON.parse(access_token);
    return access_token['name'];
  }

}




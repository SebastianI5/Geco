import { Component } from '@angular/core';
import { user } from './util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  get name(){
    return user()['name'];
  }

}




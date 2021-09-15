import { Component } from '@angular/core';

@Component({
  selector: 'random-person-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Random Person Generator';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: '/api', icon: 'view_list', title: 'Random Person'}
  ]
}

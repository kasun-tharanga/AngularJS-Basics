import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  numberCount = 33;

  users = [
    {fname:'kasun', lname:'tharanga'},
    {fname:'nalin', lname:'sanjeewa'},
    {fname:'shaveen', lname:'chaman'},
    {fname:'vidura', lname:'reshmika'},
    {fname:'olu', lname:'yasodara'}
  ];

  onKeydown(event) {
    console.log(event);
  }
}

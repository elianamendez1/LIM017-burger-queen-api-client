import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'Bri';
  age: number = 26;
  img: string = '/assets/images/background_login.jpg';
  btnDisabled = false;
  person = {
    name: 'Eliana',
    age: 27,
    avatar: '/assets/images/background_login.jpg',
    password: '1234'
  }

}


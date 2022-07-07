import { Component } from '@angular/core';
// import { PeopleService } from './services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'foodelicious';

  constructor(
    // eslint-disable-next-line no-unused-vars
    /* private peopleService: PeopleService */
  ) {
    /* this.peopleService.getPeople().subscribe((resp) => {
      console.log(resp);
    }); */
  }
}

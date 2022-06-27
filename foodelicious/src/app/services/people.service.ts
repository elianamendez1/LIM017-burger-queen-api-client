import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  _url = 'https://reqres.in/api/users';

  constructor(
    // eslint-disable-next-line no-unused-vars
    private http: HttpClient,
  ) {
    console.log('servicio de personas');
  }

  getPeople() {
    const header = new HttpHeaders()
      .set('Type-content', 'aplication/json');

    return this.http.get('this._url', {
      headers: header,
    });
  }
}

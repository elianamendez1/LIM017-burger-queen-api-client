import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  url: string = 'http://localhost:8080/login';

  constructor(
    // eslint-disable-next-line no-unused-vars
    private http: HttpClient,
  ) {
    console.log('servicio de personas');
  }

  loginByEmail(form: LoginI):Observable<ResponseI> {
    const addressEmail = `${this.url}`;
    console.log(addressEmail);
    return this.http.post<ResponseI>(addressEmail, form);
  }
/*   getPeople() {
    const header = new HttpHeaders()
      .set('Type-content', 'aplication/json');

    return this.http.get('this._url', {
      headers: header,
    });
  } */
}

import { Injectable } from '@angular/core';
// eslint-disable-next-line import/no-unresolved
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// eslint-disable-next-line import/no-unresolved
import { LoginI } from '../../models/authentication/login.interface';
// eslint-disable-next-line import/no-unresolved
import { ResponseI } from '../../models/authentication/response.interface';

@Injectable({
  providedIn: 'root',
})
// eslint-disable-next-line import/prefer-default-export
export class LoginService {
  url: string = 'http://localhost:8080/login';

  // eslint-disable-next-line no-useless-constructor
  constructor(private http: HttpClient) {}

  loginByEmail(form: LoginI):Observable<ResponseI> {
    const addressEmail = `${this.url}`;
    console.log(addressEmail, form);
    return this.http.post<ResponseI>(addressEmail, form);
  }
}

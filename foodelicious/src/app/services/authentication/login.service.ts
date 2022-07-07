import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginI } from '../../models/authentication/login.interface';
import { ResponseI } from '../../models/authentication/response.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url: string = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {}

  loginByEmail(form: LoginI):Observable<ResponseI> {
    const addressEmail = `${this.url}`;
    console.log(addressEmail, form);
    return this.http.post<ResponseI>(addressEmail, form);
  }
}

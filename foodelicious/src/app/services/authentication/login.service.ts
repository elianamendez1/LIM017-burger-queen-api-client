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

  /* headersssss = new Headers(); */
  constructor(private http: HttpClient) {
   /*  this.headersssss.append('Content-Type', 'application/json');
    this.headersssss.append('Authorization', 'application/json'); */
  }

  loginByEmail(form: LoginI):Observable<ResponseI> {
    const addressEmail = `${this.url}`;
    console.log(addressEmail, form);
    return this.http.post<ResponseI>(addressEmail, form);
  }
}

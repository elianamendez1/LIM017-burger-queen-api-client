import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/authentication/login.service';
import { LoginI } from '../../models/authentication/login.interface';
import { ResponseI } from '../../models/authentication/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private api:LoginService,
    private router: Router,
    ) {}

  ngOnInit(): void {
  }

  onLogin(form:LoginI) {
    this.api.loginByEmail(form).subscribe((data) => {
      const dataResponse:ResponseI = data;
      console.log('soyy dataaaaaa', data);
      if (dataResponse.accessToken === 'accessToken') {
        // eslint-disable-next-line no-undef
        localStorage.setItem('accessToken', dataResponse.accessToken);
        this.router.navigate(['home']);
      }
    });
  }
}

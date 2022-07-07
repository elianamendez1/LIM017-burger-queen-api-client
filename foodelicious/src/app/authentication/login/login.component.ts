import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// eslint-disable-next-line import/no-unresolved
import { LoginService } from '../../services/authentication/login.service';
// eslint-disable-next-line import/no-unresolved
import { LoginI } from '../../models/authentication/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
// eslint-disable-next-line import/prefer-default-export
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  // eslint-disable-next-line no-useless-constructor
  constructor(private api:LoginService) {}

  ngOnInit(): void {
  }

  onLogin(form:LoginI) {
    this.api.loginByEmail(form).subscribe((data) => {
      console.log(data);
    });
  }
}

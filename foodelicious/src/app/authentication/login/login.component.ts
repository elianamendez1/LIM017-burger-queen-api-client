import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/authentication/login.service';
import { LoginI } from '../../models/authentication/login.interface';

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

  constructor(private api:LoginService) {}

  ngOnInit(): void {
  }

  onLogin(form:LoginI) {
    this.api.loginByEmail(form).subscribe((data) => {
      console.log(data);
    });
  }
}

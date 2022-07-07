import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { LoginI } from 'src/app/models/login.interface';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  authForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  /*   authForm !: FormGroup;

  initForm(): void {
    this.authForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  } */

  constructor(
    private api: PeopleService,
    private readonly fb : FormBuilder,
  ) {}

  ngOnInit(): void {
  /*   this.initForm(); */
  //  this.onLogin(form);
  }

  onLogin(form: LoginI) {
    console.log(form);
    this.api.loginByEmail(form).subscribe((data) => {
      console.log(data);
    });
  }

  /*   onSubmit(): void {
    console.log('Saveeeed', this.authForm.value);
  } */
}

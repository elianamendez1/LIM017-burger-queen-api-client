import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface OptionsForm {
  id: string;
  label: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  // authForm !: FormGroup;

  constructor() {}
    //private readonly fb: FormBuilder) { }

   ngOnInit(): void {
    // this.initForm();
  }

 /*  onSubmit(): void {
    console.log('Saveeeed', this.authForm.value);
  }

  private initForm(): void {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  } */
}

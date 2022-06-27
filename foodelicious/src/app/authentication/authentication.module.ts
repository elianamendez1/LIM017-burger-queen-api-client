import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    LoginComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoginComponent,
  ],
})
export class AuthenticationModule { }

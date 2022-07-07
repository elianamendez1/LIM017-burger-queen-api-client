import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// eslint-disable-next-line import/no-unresolved
import { HttpClientModule } from '@angular/common/http';

// eslint-disable-next-line import/no-unresolved
import { AppRoutingModule } from './app-routing.module';
// eslint-disable-next-line import/no-unresolved
import { AppComponent } from './app.component';

// Modules
// eslint-disable-next-line import/no-unresolved
import { AuthenticationModule } from './authentication/authentication.module';
// eslint-disable-next-line import/no-unresolved
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthenticationModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
// eslint-disable-next-line import/prefer-default-export
export class AppModule { }

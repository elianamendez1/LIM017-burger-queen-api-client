import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  /*
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./authentication/login/login.module')
  .then((m) => m.LoginModule) },
  {
    path: 'home',
    loadChildren: () => import('./home').then(m => m.SignInModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/auth/sign-up/sign-up.module').then(m => m.SignUpModule),
    canActivate: [AuthGuard]
  }, */
  /* { path: '**', redirectTo: '/home', pathMatch: 'full' }, */
  { path: '', component: LoginComponent },

  { path: 'home', component: HomeComponent },

  /*   { path: '**', redirectTo: '/home', pathMatch: 'full' }, */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

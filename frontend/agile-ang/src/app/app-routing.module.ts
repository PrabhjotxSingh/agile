import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [SignupComponent, LoginComponent];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignIn2Component } from './sign-in2.component';

const routes: Routes = [{ path: '', component: SignIn2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignIn2RoutingModule { }

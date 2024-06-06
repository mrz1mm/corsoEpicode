import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { LoginComponent } from './login/login.component';
import { FormLoginComponent } from './form-login/form-login.component';


@NgModule({
  declarations: [
    SharedComponent,
    LoginComponent,
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }

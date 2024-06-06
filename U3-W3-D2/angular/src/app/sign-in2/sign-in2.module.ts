import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignIn2RoutingModule } from './sign-in2-routing.module';
import { SignIn2Component } from './sign-in2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignIn2Component],
  imports: [
    CommonModule,
    SignIn2RoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SignIn2Module {}

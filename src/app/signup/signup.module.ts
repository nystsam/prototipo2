import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './route-module/signup.routing.module';

import { CandidateSignupComponent } from './candidate-signup/candidate-signup.component';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
  ],
  declarations: [
    SignupComponent,
    CandidateSignupComponent,
  ]
})
export class SignupModule { }

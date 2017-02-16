import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './route-module/login.routing.module';
import { CandidateLoginComponent } from './candidate-login/candidate-login.component';
import { CompanyLoginComponent } from './company-login/company-login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
  ],
  declarations: [
    LoginComponent,
    CandidateLoginComponent,
    CompanyLoginComponent,
  ]
})
export class LoginModule { }

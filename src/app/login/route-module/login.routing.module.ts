import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LoginComponent } from '../login.component';
import { CandidateLoginComponent } from '../candidate-login/candidate-login.component';
import { CompanyLoginComponent } from '../company-login/company-login.component';

const appRoutes: Routes = [
  { path: 'login',   component: LoginComponent,
        children: [
        { path: 'candidate', component: CandidateLoginComponent },
        { path: 'company', component: CompanyLoginComponent },
        ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]

})

export class LoginRoutingModule { }
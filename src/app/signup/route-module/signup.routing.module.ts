import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { SignupComponent } from '../signup.component';
import { CandidateSignupComponent } from '../candidate-signup/candidate-signup.component';

const appRoutes: Routes = [
  { path: 'signup',   component: SignupComponent,
    children: [
        { path: 'candidate', component: CandidateSignupComponent },
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

export class SignupRoutingModule { }
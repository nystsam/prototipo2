
import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { FrontpageComponent }     from '../frontpage.component';
import { HomeComponent }     from '../home/home.component';
import { AboutComponent }     from '../about/about.component';

const appRoutes: Routes = [
  { path: 'page',   component: FrontpageComponent,  
      children: [
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: '**', redirectTo: '/home', pathMatch: 'full' }
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

export class FrontpageRoutingModule { }
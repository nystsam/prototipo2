import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontpageComponent } from './frontpage.component';
import { FrontpageRoutingModule } from './route-module/frontpage.routing.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    FrontpageRoutingModule,
  ],
  declarations: [
    FrontpageComponent,
    HomeComponent,
    AboutComponent,
  ],
  providers: [],
})

export class FrontpageModule { }

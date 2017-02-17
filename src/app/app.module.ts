import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';
import { FrontpageModule } from './frontpage/frontpage.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FrontpageModule,
    LoginModule,
    SignupModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

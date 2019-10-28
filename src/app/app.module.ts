import { RegisterModule } from './register/register.module';
import { AuthService } from './_services/auth.service';
import { NavbarModule } from './nav-bar/nav-bar.module';
import { AppValueModule } from './app-value/app-value.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppValueModule,
    BrowserModule,
    NavbarModule,
    RegisterModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

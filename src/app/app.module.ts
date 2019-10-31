import { MemberComponent } from './member/members.component';
import { ListComponent } from './lists/list.component';
import { MessageComponent } from './messages/messages.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { HomeService } from './home/home.service';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './_services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
    MessageComponent,
    ListComponent,
    MemberComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    HomeService,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

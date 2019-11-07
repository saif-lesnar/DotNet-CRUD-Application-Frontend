import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { MemberEditComponent } from './member/member-edit/member-edit.component';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { MemberCardComponent } from './member/member-card/member-card.component';
import { UserService } from './_services/user.service';
import { MemberComponent } from './member/member-list/members.component';
import { ListComponent } from './lists/list.component';
import { MessageComponent } from './messages/messages.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './_services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter(){
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
    MessageComponent,
    ListComponent,
    MemberComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent
  ],
  imports: [
    NgxGalleryModule,
    BsDropdownModule,
    TabsModule.forRoot(),
    JwtModule.forRoot({
      config : {
        tokenGetter : tokenGetter,
        whitelistedDomains : ['localhost:44350'],
        blacklistedRoutes : ['localhost:44350/api/auth']
      }
    }),
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
    ErrorInterceptorProvider,
    UserService,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

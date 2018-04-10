import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  ApplicationRef } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

// import modules
import { AppRoutingModule } from './app-routing.module';
import {LayoutModule} from './layout/layout/layout.module';

// import component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SysLoginComponent } from './login/sys-login/sys-login.component';
import { BhcoLoginComponent } from './login/non-sys-login/bhco-login/bhco-login.component';
import { MemberLoginComponent } from './login/non-sys-login/member-login/member-login.component';
import { ForgotPwdComponent } from './login/forgot-pwd/forgot-pwd.component';

//import service
import { QuestionControlService} from './shared/shared-control/question-control.service';
import { QuestionService} from './shared/shared-control/question.service';
import {AlertService} from "./login/loginService/alert.service";
import {LoginService} from "./login/loginService/login.service";
import {JwtInterceptor} from "./login/loginService/JwtInterceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthenticationService} from "./login/loginService/authentication.service";
import {AuthGuard} from "./login/loginService/auth-guard";
import {fakeBackendProvider} from "./mock-data/fake-backend";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {UserDataService} from "./mock-data/user-data.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SysLoginComponent,
    BhcoLoginComponent,
    MemberLoginComponent,
    ForgotPwdComponent
  ],
  imports: [
    RouterModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      UserDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    QuestionControlService,
    QuestionService,
    DatePipe,
    AuthGuard,
    AlertService,
    AuthenticationService,
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

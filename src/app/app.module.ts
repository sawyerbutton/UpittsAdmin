import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import {MatButtonModule, MatDividerModule} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { SysLoginComponent } from './login/sys-login/sys-login.component';
import { BhcoLoginComponent } from './login/non-sys-login/bhco-login/bhco-login.component';
import { MemberLoginComponent } from './login/non-sys-login/member-login/member-login.component';
import { ForgotPwdComponent } from './login/forgot-pwd/forgot-pwd.component';
import { HeadBarComponent } from './layout/head-bar/head-bar.component'
import { LayoutComponent } from './layout/layout.component'
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { SysLevelComponent } from './layout/left-nav/sys-level/sys-level.component';
import { StaLevelComponent } from './layout/left-nav/sta-level/sta-level.component';
import { ComLevelComponent } from './layout/left-nav/com-level/com-level.component';
import { BhcoLevelComponent } from './layout/left-nav/bhco-level/bhco-level.component';
import { MemLevelComponent } from './layout/left-nav/mem-level/mem-level.component';
import { FooterComponent } from './layout/left-nav/footer/footer.component';
import { UserInfoComponent } from './layout/left-nav/user-info/user-info.component';
import { HeaderComponent } from './layout/head-bar/header/header.component';
import {WorkspaceComponent} from './layout/workspace/workspace.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SysLoginComponent,
    BhcoLoginComponent,
    MemberLoginComponent,
    ForgotPwdComponent,
    HeadBarComponent,
    LayoutComponent,
    SysLevelComponent,
    StaLevelComponent,
    ComLevelComponent,
    BhcoLevelComponent,
    MemLevelComponent,
    FooterComponent,
    UserInfoComponent,
    HeaderComponent,
    WorkspaceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

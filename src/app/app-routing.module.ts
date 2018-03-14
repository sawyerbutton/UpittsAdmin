import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ForgotPwdComponent} from './login/forgot-pwd/forgot-pwd.component';
import {SysLoginComponent} from './login/sys-login/sys-login.component';
import {BhcoLoginComponent} from './login/non-sys-login/bhco-login/bhco-login.component';
import {MemberLoginComponent} from './login/non-sys-login/member-login/member-login.component';
import {HeadBarComponent} from './layout/head-bar/head-bar.component';
import {MemLevelComponent} from './layout/left-nav/mem-level/mem-level.component';
import {StaLevelComponent} from './layout/left-nav/sta-level/sta-level.component';
import {LayoutComponent} from './layout/layout.component';
import {ComLevelComponent} from './layout/left-nav/com-level/com-level.component';
import {SysLevelComponent} from './layout/left-nav/sys-level/sys-level.component';
import {BhcoLevelComponent} from './layout/left-nav/bhco-level/bhco-level.component';
import {LoginComponent} from './login/login.component';
import {BhcoModule} from './layout/left-nav/bhco-level/bhco.module';


export const appRoutes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sysLogin',
    component: SysLoginComponent
  },
  {
    path: 'bhcoLogin',
    component: BhcoLoginComponent
  },
  {
    path: 'cMemLogin',
    component: MemberLoginComponent
  },
  {
    path: 'forgotPwd',
    component: ForgotPwdComponent
  },
  {
    path: 'headerBar',
    component: HeadBarComponent
  },
  {
    path: 'layout',
    component: LayoutComponent
  },
  {
    path: 'SysDashboard',
    component: SysLevelComponent
  },
  {
    path: 'StateDashboard',
    component: StaLevelComponent
  },
  {
    path: 'CommunityDashboard',
    component: ComLevelComponent
  },
  {
    path: 'BhcoDashboard',
    component: BhcoLevelComponent
    //loadChildren: './layout/left-nav/bhco-level/bhco.module#BhcoModule'
  },
  {
    path: 'MemberDashboard',
    component: MemLevelComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

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
import {ComLevelModule} from './layout/left-nav/com-level/com-level.module';
import {StaLevelModule} from './layout/left-nav/sta-level/sta-level.module';
import {SysLevelModule} from './layout/left-nav/sys-level/sys-level.module';
import {MemLevelModule} from './layout/left-nav/mem-level/mem-level.module';


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
    loadChildren: './layout/left-nav/sys-level/sys-level.module#SysLevelModule'
  },
  {
    path: 'StateDashboard',
    loadChildren: './layout/left-nav/sta-level/sta-level.module#StaLevelModule'
  },
  {
    path: 'CommunityDashboard',
    loadChildren: './layout/left-nav/com-level/com-level.module#ComLevelModule'
  },
  {
    path: 'BhcoDashboard',
    loadChildren: './layout/left-nav/bhco-level/bhco.module#BhcoModule'
  },
  {
    path: 'MemberDashboard',
    loadChildren: './layout/left-nav/mem-level/mem-level.module#MemLevelModule'
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

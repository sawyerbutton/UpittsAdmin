import {LoginComponent} from './login/login.component';
import {SysLoginComponent} from './login/sys-login/sys-login.component';
import {BhcoLoginComponent} from './login/non-sys-login/bhco-login/bhco-login.component';
import {MemberLoginComponent} from './login/non-sys-login/member-login/member-login.component';
import {ForgotPwdComponent} from './login/forgot-pwd/forgot-pwd.component';
import {HeadBarComponent} from './layout/head-bar/head-bar.component';
import { LayoutComponent } from './layout/layout.component'

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
  }
];

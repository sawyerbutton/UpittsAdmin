import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {AnalysisComponent} from '../../workspace/sys-admin/analysis/analysis.component';
import {SysLevelComponent} from './sys-level.component';
import {LayoutModule} from '../../layout/layout.module';

export const routes = [{
  path: '',
  component: SysLevelComponent,
  children: [
    {path: '', redirectTo: 'createAccount', pathMatch: 'full'},
    {path: 'analysis', component: AnalysisComponent},
    {path: 'createAccount', loadChildren: '../../workspace/sys-admin/create-account/create-account.module#CreateAccountModule'}
  ]
}]

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SysLevelComponent,
    AnalysisComponent
  ],
  exports: [
    RouterModule,
    LayoutModule,
    AnalysisComponent,
    SysLevelComponent
  ]
})
export class SysLevelModule { }

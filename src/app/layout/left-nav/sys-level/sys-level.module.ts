import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {AnalysisComponent} from '../../workspace/sys-admin/analysis/analysis.component';
import {SysLevelComponent} from './sys-level.component';
import {LayoutModule} from '../../layout/layout.module';
import {routes} from './sys-level.route';

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

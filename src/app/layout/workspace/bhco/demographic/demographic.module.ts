import { NgModule } from '@angular/core';
import { SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {RouterModule, Routes} from '@angular/router';
import {DemographicComponent} from './demographic.component';
import {ControlBoxModule} from '../../../../shared/shared-module/control-box.module';
import {DemoQuestionModule} from './demo-question/demo-question.module';


const routes: Routes = [
  {
    path: '',
    component: DemographicComponent
  }
];

@NgModule({
  imports: [
    SharedModuleModule,
    ControlBoxModule,
    DemoQuestionModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DemographicComponent
  ],
  exports: [
    SharedModuleModule,
    ControlBoxModule,
    DemographicComponent,
    RouterModule,
    DemoQuestionModule
  ]
})
export class DemographicModule { }

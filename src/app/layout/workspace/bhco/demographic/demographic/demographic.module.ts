import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../../../../shared/shared-module/shared-module.module';
import {InputControlBoxModule} from '../../../../../shared/input-box/input-control-box/input-control-box.module';
import {SelectControlBoxModule} from '../../../../../shared/select-box/select-control-box/select-control-box/select-control-box.module';
import {RadioControlBoxModule} from '../../../../../shared/radio-box/radio-control-box/radio-control-box/radio-control-box.module';
import {demographicRoutes} from '../demographic.routes';
import {RouterModule} from '@angular/router';
import {DemographicComponent} from '../demographic.component';
import {DemoQuestionsComponent} from '../demo-questions/demo-questions.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    InputControlBoxModule,
    SelectControlBoxModule,
    RadioControlBoxModule,
    RouterModule.forChild(demographicRoutes)
  ],
  declarations: [
    DemographicComponent,
    DemoQuestionsComponent
  ]
})
export class DemographicModule { }

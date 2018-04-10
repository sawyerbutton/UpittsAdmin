import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../shared/shared-module/control-box.module';
import {AlertModule} from "../alert/alert.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    AlertModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    AlertModule
  ]
})
export class SysLoginModule { }

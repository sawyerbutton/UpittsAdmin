import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import {SharedModuleModule} from "../../shared/shared-module/shared-module.module";

@NgModule({
  imports: [
    SharedModuleModule,
    CommonModule
  ],
  declarations: [AlertComponent],
  exports: [
    SharedModuleModule,
    AlertComponent
  ]
})
export class AlertModule { }

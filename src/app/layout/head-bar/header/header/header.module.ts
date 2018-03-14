import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {HeaderComponent} from '../header.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  declarations: [
    HeaderComponent
  ]
})
export class HeaderModule { }

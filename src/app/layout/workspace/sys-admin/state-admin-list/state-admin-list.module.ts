import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateAdminListComponent } from './state-admin-list.component';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    SharedModuleModule,
    RouterModule.forChild([
      {path: '', component: StateAdminListComponent}
    ])
  ],
  declarations: [StateAdminListComponent],
  exports: [
    SharedModuleModule,
    RouterModule,
    StateAdminListComponent
  ]
})
export class StateAdminListModule { }

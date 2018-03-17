import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignTableComponent } from './assign-table.component';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {ControlBoxModule} from '../../../../shared/shared-module/control-box.module';
import {RouterModule} from '@angular/router';
import {MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';

@NgModule({
  imports: [
    SharedModuleModule,
    ControlBoxModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    RouterModule.forChild([
      {path:'', component: AssignTableComponent}
    ])
  ],
  declarations: [AssignTableComponent],
  exports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    SharedModuleModule,
    ControlBoxModule,
    AssignTableComponent
  ]

})
export class AssignTableModule { }

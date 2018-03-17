import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ComLevelComponent} from './com-level.component';
import {LayoutModule} from '../../layout/layout.module';

export const routes = [
  {
    path: '',
    component: ComLevelComponent,
    children: [
      {path: '', redirectTo: 'create-c-mem', pathMatch: 'full'},
      {path: 'create-family', loadChildren: '../../workspace/com-admin/create-family/create-family.module#CreateFamilyModule'},
      {path: 'create-c-mem', loadChildren: '../../workspace/com-admin/create-c-mem/create-c-mem.module#CreateCMemModule'},
      {path: 'create-bhco', loadChildren: '../../workspace/com-admin/create-bhco/create-bhco.module#CreateBhcoModule'}
    ]
  }
];

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ComLevelComponent
  ],
  exports: [
    RouterModule,
    LayoutModule,
    ComLevelComponent
  ]
})
export class ComLevelModule { }

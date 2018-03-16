import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {StaLevelComponent} from './sta-level.component';
import {LayoutModule} from '../../layout/layout.module';


export const routes = [{
  path: '',
  component: StaLevelComponent,
  children: [
    {path: '', redirectTo: 'createCom', pathMatch: 'full'},
    {path: 'createCom', loadChildren: '../../workspace/sta-admin/create-com/create-com.module#CreateComModule'}
  ]
}
]
@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    StaLevelComponent
  ],
  exports: [
    RouterModule,
    LayoutModule,
    StaLevelComponent
  ]
})
export class StaLevelModule { }

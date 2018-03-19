import {SysLevelComponent} from './sys-level.component';
import {AnalysisComponent} from '../../workspace/sys-admin/analysis/analysis.component';
import {BhcoListModule} from '../../workspace/com-admin/bhco-list/bhco-list.module';

export const routes = [{
  path: '',
  component: SysLevelComponent,
  children: [
    {path: '', redirectTo: 'createAccount', pathMatch: 'full'},
    {path: 'analysis', component: AnalysisComponent},
    {path: 'createAccount', loadChildren: '../../workspace/sys-admin/create-account/create-account.module#CreateAccountModule'},
    {path: 'memberList', loadChildren: '../../workspace/bhco/assign-table/assign-table.module#AssignTableModule'},
    {path: 'stateList', loadChildren: '../../workspace/sys-admin/state-admin-list/state-admin-list.module#StateAdminListModule'},
    {path: 'comList', loadChildren: '../../workspace/sta-admin/com-admin-list/com-admin-list.module#ComAdminListModule'},
    {path: 'bhcoList', loadChildren: '../../workspace/com-admin/bhco-list/bhco-list.module#BhcoListModule'}
  ]
}]

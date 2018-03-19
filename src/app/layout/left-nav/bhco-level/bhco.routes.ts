import {BhcoLevelComponent} from './bhco-level.component';
import {SessionModule} from '../../workspace/bhco/session/session.module';

export const bhcoWorkSpaceRoutes = [
  {
    path: '',
    component: BhcoLevelComponent,
    children: [
      {path: '', redirectTo: 'session', pathMatch: 'full'},
      {path: 'socialNetwork', loadChildren: '../../workspace/bhco/social-network/social-network.module#SocialNetworkModule'},
      {path: 'demographic', loadChildren: '../../workspace/bhco/demographic/demographic.module#DemographicModule'},
      {path: 'questionnaire', loadChildren: '../../workspace/bhco/questionnaire/physical-domain/physical-domain.module#PhysicalDomainModule'},
      {path: 'assign', loadChildren: '../../workspace/bhco/assign-table/assign-table.module#AssignTableModule'},
      {path: 'profile', loadChildren: '../../workspace/profile/profile.module#ProfileModule'},
      {path: 'editProfile', loadChildren: '../../workspace/profile/edit-profile/edit-profile.module#EditProfileModule'},
      {path: 'session', loadChildren: '../../workspace/bhco/session/session.module#SessionModule'}
      ]
  }
];


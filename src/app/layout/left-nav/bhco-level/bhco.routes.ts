import {BhcoLevelComponent} from './bhco-level.component';

export const bhcoWorkSpaceRoutes = [
  {
    path: '',
    component: BhcoLevelComponent,
    children: [
      {path: '', redirectTo: 'assign', pathMatch: 'full'},
      {path: 'socialNetwork', loadChildren: '../../workspace/bhco/social-network/social-network.module#SocialNetworkModule'},
      // {path: 'demographic', loadChildren: '../../workspace/bhco/demographic/demographic/demographic.module#DemographicModule'},
      {path: 'questionnaire', loadChildren: '../../workspace/bhco/questionnaire/physical-domain/physical-domain.module#PhysicalDomainModule'},
      {path: 'assign', loadChildren: '../../workspace/bhco/assign-table/assign-table.module#AssignTableModule'}
    ]
  }
];


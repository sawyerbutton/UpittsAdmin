import {BhcoLevelComponent} from './bhco-level.component';
import {QuestionnaireAnsModule} from '../../workspace/bhco/questionnaire-ans/questionnaire-ans.module';

export const bhcoWorkSpaceRoutes = [
  {
    path: '',
    component: BhcoLevelComponent,
    children: [
      {path: '', redirectTo: 'question-ans', pathMatch: 'full'},
      {path: 'socialNetwork', loadChildren: '../../workspace/bhco/social-network/social-network.module#SocialNetworkModule'},
      {path: 'demographic', loadChildren: '../../workspace/bhco/demographic/demographic.module#DemographicModule'},
      {path: 'physical-domain', loadChildren: '../../workspace/bhco/questionnaire/physical-domain/physical-domain.module#PhysicalDomainModule'},
      {path: 'behavioral-domain', loadChildren: '../../workspace/bhco/questionnaire/behavioral-domain/behavioral-domain.module#BehavioralDomainModule'},
      {path: 'assign', loadChildren: '../../workspace/bhco/assign-table/assign-table.module#AssignTableModule'},
      {path: 'profile', loadChildren: '../../workspace/profile/profile.module#ProfileModule'},
      {path: 'editProfile', loadChildren: '../../workspace/profile/edit-profile/edit-profile.module#EditProfileModule'},
      {path: 'session', loadChildren: '../../workspace/bhco/session/session.module#SessionModule'},
      {path: 'question-ans', loadChildren: '../../workspace/bhco/questionnaire-ans/questionnaire-ans.module#QuestionnaireAnsModule'},
      ]
  }
];


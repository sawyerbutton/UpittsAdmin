import {BhcoLevelComponent} from './bhco-level.component';
import {SocialNetworkComponent} from '../../workspace/bhco/social-network/social-network.component';
import {DemographicComponent} from '../../workspace/bhco/demographic/demographic.component';
import {SocialNetworkModule} from '../../workspace/bhco/social-network/social-network.module';
import {DemographicModule} from '../../workspace/bhco/demographic/demographic.module';
import {PhysicalDomainModule} from '../../workspace/bhco/questionnaire/physical-domain/physical-domain.module';


export const bhcoWorkSpaceRoutes = [
  {
    path: '',
    component: BhcoLevelComponent,
    children: [
      {path: '', redirectTo: 'questionnaire', pathMatch: 'full'},
      {path: 'socialNetwork', loadChildren: '../../workspace/bhco/social-network/social-network.module#SocialNetworkModule'},
      // {path: 'demographic', loadChildren: '../../workspace/bhco/demographic/demographic/demographic.module#DemographicModule'},
      {path: 'questionnaire', loadChildren: '../../workspace/bhco/questionnaire/physical-domain/physical-domain.module#PhysicalDomainModule'}

    ]
  }
];


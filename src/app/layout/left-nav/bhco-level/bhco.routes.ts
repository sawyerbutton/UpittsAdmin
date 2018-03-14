import {BhcoLevelComponent} from './bhco-level.component';
import {SocialNetworkComponent} from '../../workspace/bhco/social-network/social-network.component';
import {DemographicComponent} from '../../workspace/bhco/demographic/demographic.component';
import {SocialNetworkModule} from '../../workspace/bhco/social-network/social-network.module';
import {DemographicModule} from '../../workspace/bhco/demographic/demographic/demographic.module';

export const bhcoWorkSpaceRoutes = [
  {
    path: '',
    component: BhcoLevelComponent,
    children: [
      {path: '', redirectTo: 'demographic', pathMatch: 'full'},
      {path: 'socialNetwork', loadChildren: '../../workspace/bhco/social-network/social-network.module#SocialNetworkModule'},
      {path: 'demographic', loadChildren: '../../workspace/bhco/demographic/demographic/demographic.module#DemographicModule'}
    ]
  }
];

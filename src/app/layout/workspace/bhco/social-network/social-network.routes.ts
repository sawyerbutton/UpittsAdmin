import {SocialNetworkComponent} from './social-network.component';

export const socialNetworkRoutes = [{
  path: '',
  component: SocialNetworkComponent,
  children : [
    {path: '', redirectTo: 'socialNetwork', pathMatch: 'full'},
    {path: 'socialNetwork', component: SocialNetworkComponent}
  ]
}];

import {DemographicComponent} from './demographic.component';

export const demographicRoutes = [{
  path: '',
  component: DemographicComponent,
  children : [
    {path: '', redirectTo: 'demographic', pathMatch: 'full'},
    {path: 'demographic', component: DemographicComponent}
  ]
}];

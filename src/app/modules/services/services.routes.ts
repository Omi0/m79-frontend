import { Routes } from '@angular/router';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';

export const servicesRoutes: Routes = [
  {
    path: 'service-details',
    component: ServiceDetailsComponent,
  },
  { path: '**', redirectTo: 'service-details', pathMatch: 'full' },
];

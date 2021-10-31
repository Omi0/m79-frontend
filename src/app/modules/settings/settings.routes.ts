import { Routes } from '@angular/router';

import {
    LocationManagementComponent
} from './components/location-management/location-management.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import {
    VehicleManagementComponent
} from './components/vehicle-management/vehicle-management.component';

export const settingsRoutes: Routes = [
  {
    path: 'user-management',
    component: UserManagementComponent,
  },
  {
    path: 'location-management',
    component: LocationManagementComponent,
  },
  {
    path: 'vehicle-management',
    component: VehicleManagementComponent,
  },
  { path: '**', redirectTo: 'user-management', pathMatch: 'full' },
];

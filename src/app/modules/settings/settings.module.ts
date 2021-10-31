import { CommonModule } from '@angular/common';
import { LocationManagementComponent } from './components/location-management/location-management.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { VehicleManagementComponent } from './components/vehicle-management/vehicle-management.component';
import { settingsRoutes } from './settings.routes';

@NgModule({
  declarations: [
    UserManagementComponent,
    LocationManagementComponent,
    VehicleManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(settingsRoutes)
  ]
})
export class SettingsModule { }

import { AbsencesComponent } from './components/absences/absences.component';
import { Routes } from '@angular/router';
import { ShiftListComponent } from './components/shift-list/shift-list.component';
import { ShiftManagementComponent } from './components/shift-management/shift-management.component';

export const shiftsRoutes: Routes = [
  {
    path: 'absences',
    component: AbsencesComponent,
  },
  {
    path: 'shift-list',
    component: ShiftListComponent,
  },
  {
    path: 'shift-management',
    component: ShiftManagementComponent,
  },
  { path: '**', redirectTo: 'absences', pathMatch: 'full' },
];

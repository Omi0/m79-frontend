import { AbsencesComponent } from './components/absences/absences.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShiftListComponent } from './components/shift-list/shift-list.component';
import { ShiftManagementComponent } from './components/shift-management/shift-management.component';
import { shiftsRoutes } from './shifts.routes';

@NgModule({
  declarations: [
    ShiftManagementComponent,
    ShiftListComponent,
    AbsencesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(shiftsRoutes)
  ]
})
export class ShiftsModule { }

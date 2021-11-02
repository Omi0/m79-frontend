import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'services',
    loadChildren: () => import('./modules/services/services.module').then((m) => m.ServicesModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'shifts',
    loadChildren: () => import('./modules/shifts/shifts.module').then((m) => m.ShiftsModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

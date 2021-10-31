import { InjectionToken } from '@angular/core';
import { faBook, faCalendarAlt, faCog, faHome } from '@fortawesome/free-solid-svg-icons';

import { NavbarItem } from '../models/navbar-item.model';

export const NAVBAR_ITEMS = new InjectionToken<NavbarItem[]>('NAVBAR_ITEMS', {
  factory() {
    return [
      {
        name: 'Home',
        route: '',
        icon: faHome,
      },
      {
        name: 'Services',
        route: 'services',
        icon: faBook,
      },
      {
        name: 'Shifts',
        route: 'shifts',
        icon: faCalendarAlt,
      },
      {
        name: 'Settings',
        route: 'settings',
        icon: faCog,
      },
    ];
  },
});

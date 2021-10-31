import { Component, OnInit } from '@angular/core';

import { NavbarItem } from '../../models/navbar-item.model';

@Component({
  selector: 'm79-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  items: NavbarItem[] = [
    {
      name: 'Home',
      route: '',
    },
    {
      name: 'Services',
      route: 'services',
    },
    {
      name: 'Shifts',
      route: 'shifts',
    },
    {
      name: 'Settings',
      route: 'settings',
    },
  ];

  ngOnInit(): void {}
}

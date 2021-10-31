import { Component, Inject } from '@angular/core';

import { NavbarItem } from '../../models/navbar-item.model';
import { NAVBAR_ITEMS } from '../../providers/navbar-items.factory';

@Component({
  selector: 'm79-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  items: NavbarItem[];

  constructor(@Inject(NAVBAR_ITEMS) navbarItems: NavbarItem[]) {
    this.items = navbarItems;
  }
}

import { TestBed } from '@angular/core/testing';

import { NavbarItem } from '../models/navbar-item.model';
import { NAVBAR_ITEMS } from './navbar-items.factory';

describe('InjectionToken<NavbarItem[]>', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        {
          provide: NAVBAR_ITEMS,
          useValue: [{
              icon: null as any,
              name: 'name',
              route: 'route'
          }] as NavbarItem[]
        },
      ],
    })
  );

  it('should be created', () => {
    const items = TestBed.inject(NAVBAR_ITEMS);
    expect(items).toBeTruthy();
    expect(items.length).toBe(1);
    expect(items[0].icon).toBeNull();
    expect(items[0].name).toBe('name');
    expect(items[0].route).toBe('route');
  });
});

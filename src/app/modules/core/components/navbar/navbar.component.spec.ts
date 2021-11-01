import { ComponentFixture, TestBed } from '@angular/core/testing';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { NavbarItem } from '../../models/navbar-item.model';
import { NAVBAR_ITEMS } from '../../providers/navbar-items.factory';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      providers: [{
        provide: NAVBAR_ITEMS,
        useValue: [{
          name: 'fake-name',
          route: 'fake-route',
          icon: faHome
        }] as NavbarItem[],
      },]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show NavbarItems[]', () => {
    const items = (fixture.nativeElement as HTMLElement).querySelector('ul > li');
    expect(items?.children.length).toBe(1);
    expect(items?.firstChild?.textContent).toContain('fake-name');
  });
});

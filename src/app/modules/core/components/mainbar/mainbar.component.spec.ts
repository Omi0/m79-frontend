import { of } from 'rxjs';

import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { UserService } from '../../providers/user.service';
import { MainbarComponent } from './mainbar.component';

describe('MainbarComponent', () => {
  let component: MainbarComponent;
  let fixture: ComponentFixture<MainbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainbarComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        {
          provide: UserService,
          useValue: {
            user$: of({ username: 'fake-name' }),
          } as Partial<UserService>,
        },
      ],
    }).compileComponents();
  });

  describe(`authenticated user`, () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(MainbarComponent);
      component = fixture.componentInstance;
    });

    it('should show username', () => {
      const mainbarMenu = (fixture.nativeElement as HTMLElement).querySelector('.mainbar-menu .item:nth-child(1)');
      expect(mainbarMenu?.textContent).toContain('fake-name');
    });

    it('should show logout icon', () => {
      const mainbarMenu = (fixture.nativeElement as HTMLElement).querySelector('.mainbar-menu fa-icon');
      expect(mainbarMenu).toBeTruthy();
    });
  });

  describe(`unauthenticated user`, () => {
    beforeEach(() => {
      TestBed.overrideProvider(UserService, {
        useValue: {
          user$: of(undefined as any),
        } as Partial<UserService>,
      });
      fixture = TestBed.createComponent(MainbarComponent);
      component = fixture.componentInstance;
    });

    it('should show login button for unauthenticated users', () => {
      const mainbarMenu = (fixture.nativeElement as HTMLElement).querySelector('.mainbar-menu');
      expect(mainbarMenu?.textContent).toContain('Login');
    });
  });
});

import { Location } from '@angular/common';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { settingsRoutes } from './settings.routes';

describe('Router: settingsRoutes', () => {
  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(settingsRoutes)],
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it(
    `navigate to '/' redirects you to '/user-management'`,
    waitForAsync(() => {
      router.navigate(['']).then(() => {
        expect(location.path()).toBe('/user-management');
      });
    })
  );

  it(
    `navigate to '/unknown' redirects you to '/user-management'`,
    waitForAsync(() => {
      router.navigate(['unknown']).then(() => {
        expect(location.path()).toBe('/user-management');
      });
    })
  );

  it(
    `navigate to '/location-management' redirects you to '/location-management'`,
    waitForAsync(() => {
      router.navigate(['location-management']).then(() => {
        expect(location.path()).toBe('/location-management');
      });
    })
  );

  it(
    `navigate to '/vehicle-management' redirects you to '/vehicle-management'`,
    waitForAsync(() => {
      router.navigate(['vehicle-management']).then(() => {
        expect(location.path()).toBe('/vehicle-management');
      });
    })
  );
});

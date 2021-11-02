import { Location } from '@angular/common';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { shiftsRoutes } from './shifts.routes';

describe('Router: shiftsRoutes', () => {
  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(shiftsRoutes)],
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it(
    `navigate to '/' redirects you to '/absences'`,
    waitForAsync(() => {
      router.navigate(['']).then(() => {
        expect(location.path()).toBe('/absences');
      });
    })
  );

  it(
    `navigate to '/unknown' redirects you to '/absences'`,
    waitForAsync(() => {
      router.navigate(['unknown']).then(() => {
        expect(location.path()).toBe('/absences');
      });
    })
  );

  it(
    `navigate to '/shift-list' redirects you to '/shift-list'`,
    waitForAsync(() => {
      router.navigate(['shift-list']).then(() => {
        expect(location.path()).toBe('/shift-list');
      });
    })
  );

  it(
    `navigate to '/shift-management' redirects you to '/shift-management'`,
    waitForAsync(() => {
      router.navigate(['shift-management']).then(() => {
        expect(location.path()).toBe('/shift-management');
      });
    })
  );
});

import { Location } from '@angular/common';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { coreRoutes } from './core.routes';

describe('Router: coreRoutes', () => {
  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(coreRoutes)],
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it(
    `navigate to '/' redirects you to '/'`,
    waitForAsync(() => {
      router.navigate(['']).then(() => {
        expect(location.path()).toBe('/');
      });
    })
  );
});

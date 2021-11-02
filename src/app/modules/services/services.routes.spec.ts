import { Location } from '@angular/common';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { servicesRoutes } from './services.routes';

describe('Router: servicesRoutes', () => {
  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(servicesRoutes)],
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it(
    `navigate to '/' redirects you to '/service-details'`,
    waitForAsync(() => {
      router.navigate(['']).then(() => {
        expect(location.path()).toBe('/service-details');
      });
    })
  );

  it(
    `navigate to '/unknown' redirects you to '/service-details'`,
    waitForAsync(() => {
      router.navigate(['unknown']).then(() => {
        expect(location.path()).toBe('/service-details');
      });
    })
  );
});

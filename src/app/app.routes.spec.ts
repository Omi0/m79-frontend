import { Location } from '@angular/common';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { appRoutes } from './app.routes';

describe('Router: appRoutes', () => {
  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(appRoutes)],
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

  it(
    `navigate to '/unknown' redirects you to '/'`,
    waitForAsync(() => {
      router.navigate(['unknown']).then(() => {
        expect(location.path()).toBe('/');
      });
    })
  );

  it(
    `navigate to '/services' redirects you to '/services/*'`,
    waitForAsync(() => {
      router.navigate(['services']).then(() => {
        expect(location.path()).toContain('/services');
      });
    })
  );

  it(
    `navigate to '/settings' redirects you to '/settings/*'`,
    waitForAsync(() => {
      router.navigate(['settings']).then(() => {
        expect(location.path()).toContain('/settings');
      });
    })
  );

  it(
    `navigate to '/shifts' redirects you to '/shifts/*'`,
    waitForAsync(() => {
      router.navigate(['shifts']).then(() => {
        expect(location.path()).toContain('/shifts');
      });
    })
  );
});

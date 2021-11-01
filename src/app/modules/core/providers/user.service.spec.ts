import { switchMap } from 'rxjs/operators';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '@environments/environment';

import { User } from '../models/user.model';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe(`login()`, () => {
    it('should return true', () => {
      const userId = 1;

      service.login(userId).subscribe(
        status => {
          expect(status).toBe(true);
        }
      );

      const req = httpMock.expectOne(`${environment.baseUrl}/users/${userId}`);
      expect(req.request.method).toBe('GET');
      req.flush({} as User);
    });

    it('should return false', () => {
      const userId = 1;

      service.login(userId).subscribe(
        status => {
          expect(status).toBe(false);
        }
      );

      const req = httpMock.expectOne(`${environment.baseUrl}/users/${userId}`);
      expect(req.request.method).toBe('GET');
      req.flush('');
    });
  });

  describe(`user$`, () => {
    it('should emit User after login()', () => {
      const user: User = {
        id: 1,
        email: 'fake-email',
        name: 'fake-name',
        username: 'fake-username',
      };

      service.login(user.id).pipe(switchMap(() => service.user$)).subscribe(
        user => {
          expect(user).toBeDefined();
          expect(user.id).toBe(user.id);
          expect(user.email).toBe(user.email);
          expect(user.name).toBe(user.name);
          expect(user.username).toBe(user.username);
        }
      );

      const req = httpMock.expectOne(`${environment.baseUrl}/users/${user.id}`);
      expect(req.request.method).toBe('GET');
      req.flush(user);
    });
  });

  it('should emit undefined after logout()', () => {
    service.user$.subscribe(user => {
      expect(user).toBeUndefined()
    })

    service.logout()
  });
});

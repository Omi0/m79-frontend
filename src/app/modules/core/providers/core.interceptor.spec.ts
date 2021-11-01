import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { CoreInterceptor } from './core.interceptor';

@Injectable()
export class MockService {
  constructor(private http: HttpClient) {}

  get<T>() {
    return this.http.get<T>('');
  }
}

describe(`CoreInterceptor`, () => {
  let service: MockService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        MockService,
        CoreInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: CoreInterceptor,
          multi: true,
        },
      ],
    });

    service = TestBed.inject(MockService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    const interceptor: CoreInterceptor = TestBed.inject(CoreInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should show alerts for HttpErrorResponse', () => {
    spyOn(window, 'alert');

    service.get<any>().subscribe(
      (res) => {},
      (err) => {
        expect(err.status).toBe(404);
        expect(window.alert).toHaveBeenCalledWith(
          'Http failure response for (unknown url): 404 Not Found'
        );
      }
    );

    const req = httpMock.expectOne('');
    expect(req.request.method).toBe('GET');
    req.flush('', { status: 404, statusText: 'Not Found' });
  });
});

import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly userSubject: Subject<User> = new Subject<User>();

  constructor(private httpClient: HttpClient) {}

  get user$(): Observable<User> {
    return this.userSubject.asObservable();
  }

  login(userId: number): Observable<boolean> {
    return this.httpClient
      .get<User>(`${environment.baseUrl}/users/${userId}`)
      .pipe(
        map((user) => {
          if (typeof user === 'object') {
            this.userSubject.next(user);
            return true;
          }
          return false;
        })
      );
  }

  logout(): void {
    this.userSubject.next(undefined);
  }
}

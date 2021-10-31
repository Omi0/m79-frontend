import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly userSubject: Subject<User> = new Subject<User>();
  public readonly user$ = this.userSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  // get user$(): Observable<User | null> {
  //   return this.user.asObservable();
  // }

  login(userId: number): Observable<boolean> {
    return this.httpClient.get<User>(`${environment.baseUrl}/users/${userId}`).pipe(
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
    this.userSubject.next(undefined)
  }
}

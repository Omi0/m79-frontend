import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { Component } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { User } from '../../models/user.model';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'm79-mainbar',
  templateUrl: './mainbar.component.html',
  styleUrls: ['./mainbar.component.scss'],
})
export class MainbarComponent {
  user$: Observable<User>;
  logoutIcon = faSignOutAlt;

  constructor(private userService: UserService) {
    this.user$ = this.userService.user$;
  }

  login(): void {
    const randomUserId = Math.floor(Math.random() * 10) + 1;
    this.userService.login(randomUserId).pipe(first()).subscribe();
  }

  logout(): void {
    this.userService.logout();
  }
}

import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomepageComponent } from './components/homepage/homepage.component';
import { MainbarComponent } from './components/mainbar/mainbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { coreRoutes } from './core.routes';
import { CoreInterceptor } from './providers/core.interceptor';
import { UserService } from './providers/user.service';

@NgModule({
  declarations: [NavbarComponent, MainbarComponent, HomepageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forChild(coreRoutes),
  ],
  exports: [NavbarComponent, MainbarComponent],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: CoreInterceptor, multi: true },
      ],
    };
  }
}

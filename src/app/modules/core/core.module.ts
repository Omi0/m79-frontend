import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MainbarComponent } from './components/mainbar/mainbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { coreRoutes } from './core.routes';

@NgModule({
  declarations: [NavbarComponent, MainbarComponent, HomepageComponent],
  imports: [CommonModule, RouterModule.forChild(coreRoutes)],
  exports: [NavbarComponent, MainbarComponent],
})
export class CoreModule {}

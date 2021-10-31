import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { servicesRoutes } from './services.routes';

@NgModule({
  declarations: [ServiceDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(servicesRoutes)],
})
export class ServicesModule {}

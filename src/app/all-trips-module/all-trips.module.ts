import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllTripsPageComponent} from 'src/app/all-trips-page/all-trips-page.component';
import {SharedModule} from 'src/app/shared-module/shared.module';

import { AllTripsRoutingModule } from './all-trips-routing.module';


@NgModule({
  declarations: [
    AllTripsPageComponent,
  ],
  imports: [
    CommonModule,
    AllTripsRoutingModule,
    SharedModule
  ]
})
export class AllTripsModule { }

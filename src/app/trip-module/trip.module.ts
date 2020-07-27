import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TripPageComponent} from 'src/app/trip-page/trip-page.component';

import {TripRoutingModule} from './trip-routing.module';


@NgModule({
  declarations: [
    TripPageComponent,
  ],
  imports: [
    CommonModule,
    TripRoutingModule
  ]
})
export class TripModule {
}

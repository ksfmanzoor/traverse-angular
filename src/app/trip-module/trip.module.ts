import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {TripPageComponent} from 'src/app/trip-page/trip-page.component';

import {TripRoutingModule} from './trip-routing.module';


@NgModule({
  declarations: [
    TripPageComponent,
  ],
  imports: [
    CommonModule,
    TripRoutingModule,
    CarouselModule,
    FontAwesomeModule
  ]
})
export class TripModule {
}

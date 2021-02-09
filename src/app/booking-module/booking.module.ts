import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BookingPageComponent} from 'src/app/booking-page/booking-page.component';
import {SuccessfulBookingPageComponent} from 'src/app/successfull-booking-page/successful-booking-page.component';

import { BookingRoutingModule } from './booking-routing.module';


@NgModule({
  declarations: [
    BookingPageComponent,
    SuccessfulBookingPageComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class BookingModule { }

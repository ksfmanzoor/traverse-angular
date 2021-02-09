import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookingPageComponent} from 'src/app/booking-page/booking-page.component';
import {TripBookingResolverService} from 'src/app/services/trip-booking-resolver.service';
import {SuccessfulBookingPageComponent} from 'src/app/successfull-booking-page/successful-booking-page.component';


const routes: Routes = [
  {
    path: '', component: BookingPageComponent,
  },
  {
    path: 'success/:id', component: SuccessfulBookingPageComponent, resolve: {
      booking: TripBookingResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule {
}

import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {CreateTripBooking} from 'src/app/models/create-trip-booking';
import {TripBookingService} from 'src/app/services/trip-booking.service';

@Injectable({
  providedIn: 'root'
})
export class PopupBookingService {
  bookingTrip: CreateTripBooking;
  isPopUpMode = false;

  constructor(private tripBookingService: TripBookingService, private router: Router) { }

  createBookingThroughPopup() {
    this.tripBookingService.postTripBooking(this.bookingTrip).subscribe((data: CreateTripBooking) => {
      this.router.navigate(['/booking/success', data.id]).then();
    });
  }
}

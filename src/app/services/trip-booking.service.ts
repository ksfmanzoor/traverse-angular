import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BookedTrip} from 'src/app/models/booked-trip';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripBookingService {
  private tripBookingUrl = `${environment.baseUrl}traverse/booking/trip/`;

  constructor(private httpClient: HttpClient) { }

  postTripBooking(bookingTrip: BookedTrip) {
    return this.httpClient.post(this.tripBookingUrl, bookingTrip);
  }
}

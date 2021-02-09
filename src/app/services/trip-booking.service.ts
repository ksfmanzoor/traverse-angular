import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CreateTripBooking} from 'src/app/models/create-trip-booking';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripBookingService {
  private tripBookingUrl = `${environment.baseUrl}traverse/booking/trip/`;

  constructor(private httpClient: HttpClient) { }

  getTripBooking(id): Observable<any> {
    return this.httpClient.get(`${this.tripBookingUrl}/${id}`);
  }

  postTripBooking(bookingTrip: CreateTripBooking) {
    return this.httpClient.post(this.tripBookingUrl, bookingTrip);
  }
}

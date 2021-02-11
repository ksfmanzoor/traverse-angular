import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TripBooking} from 'src/app/models/trip-booking';
import {TripBookingService} from 'src/app/services/trip-booking.service';

@Injectable({
  providedIn: 'root'
})
export class SingleTripBookingResolverService implements Resolve<TripBooking> {

  constructor(private tripBookingService: TripBookingService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TripBooking> | Promise<TripBooking> | TripBooking {
    return this.tripBookingService.getTripBooking(route.params.id);
  }
}

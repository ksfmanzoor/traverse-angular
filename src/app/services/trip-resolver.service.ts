import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Trip} from 'src/app/models/trip';
import {TripService} from 'src/app/services/trip.service';

@Injectable({
  providedIn: 'root'
})
export class TripResolverService implements Resolve<Trip> {

  constructor(private tripService: TripService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Trip> | Promise<Trip> | Trip {
    return this.tripService.fetchTrip(route.params.slug);
  }
}

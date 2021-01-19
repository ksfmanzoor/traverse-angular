import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MinifiedTrip} from 'src/app/models/minified-trip';
import {AllTripService} from 'src/app/services/all-trip.service';

@Injectable({
  providedIn: 'root'
})
export class AllTripResolverService implements Resolve<MinifiedTrip> {

  constructor(private allTripService: AllTripService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MinifiedTrip> | Promise<MinifiedTrip> | MinifiedTrip {
    return this.allTripService.fetchMinifiedTrips();
  }


}

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Destination} from '../models/destination';
import {DestinationService} from './destination.service';

@Injectable({
  providedIn: 'root'
})
export class DestinationResolverService implements Resolve<Destination> {

  constructor(private placeService: DestinationService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Destination>
    | Promise<Destination> | Destination {
    console.log()
    return this.placeService.fetchPlace(route.params.slug);
  }
}

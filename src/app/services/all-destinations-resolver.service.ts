import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Destination} from '../models/destination';
import {AllDestinationsService} from './all-destinations.service';
import {MinifiedHomeData} from '../models/minified-home-data';

@Injectable({
  providedIn: 'root'
})
export class AllDestinationsResolverService implements Resolve<[MinifiedHomeData]> {

  constructor(private allDestinationsService: AllDestinationsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<[MinifiedHomeData]> |
      Promise<[MinifiedHomeData]> | [MinifiedHomeData] {
    return this.allDestinationsService.fetchAllDestinations();
  }

}

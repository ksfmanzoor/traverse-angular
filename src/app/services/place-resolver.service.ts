import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Destination} from '../models/destination';
import {Observable} from 'rxjs';
import {PlaceService} from './place.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceResolverService implements Resolve<Destination> {

  constructor(private placeService: PlaceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Destination> | Promise<Destination> | Destination {
    return this.placeService.fetchPlace();
  }
}

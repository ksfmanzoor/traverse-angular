import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Place} from '../models/place';
import {Observable} from 'rxjs';
import {PlaceService} from './place.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceResolverService implements Resolve<Place> {

  constructor(private placeService: PlaceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Place> | Promise<Place> | Place {
    return this.placeService.fetchPlace();
  }
}

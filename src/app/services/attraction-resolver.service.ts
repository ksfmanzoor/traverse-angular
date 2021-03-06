import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Attraction} from '../models/attraction';
import {AttractionService} from './attraction.service';

@Injectable({
  providedIn: 'root'
})
export class AttractionResolverService implements Resolve<Attraction> {

  constructor(private attractionService: AttractionService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Attraction> |
      Promise<Attraction> | Attraction {
    return this.attractionService.fetchAttraction(route.params.slug);
  }
}

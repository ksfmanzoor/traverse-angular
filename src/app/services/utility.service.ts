import {Injectable} from '@angular/core';
import {Departure, Package} from 'src/app/models/trip';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  packageFinder(packageList: Package[], id): Package {
    return packageList.find(e => e.id === id);
  }

  departureFinder(departureList: Departure[], id): Departure {
    return departureList.find(e => e.id === id);
  }
}

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  tripUrl = `${environment.baseUrl}traverse/trip/`;

  constructor(private httpClient: HttpClient) { }

  fetchTrip(slug): any {
    return this.httpClient.get(this.tripUrl + slug);
  }
}

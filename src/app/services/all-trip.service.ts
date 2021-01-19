import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllTripService {
  private allMinifiedTripUrl = `${environment.baseUrl}traverse/trip/`;

  constructor(private httpClient: HttpClient) { }

  fetchMinifiedTrips(): Observable<any> {
    return this.httpClient.get(this.allMinifiedTripUrl);
  }
}

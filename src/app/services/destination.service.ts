import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private placeUrl = `${environment.baseUrl}traverse/place/`;
  constructor(private  http: HttpClient) { }

  fetchPlace(slug): Observable<any> {
    return this.http.get(this.placeUrl + slug);
  }
}

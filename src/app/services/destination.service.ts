import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private placeUrl = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/place/';
  constructor(private  http: HttpClient) { }

  fetchPlace(id): Observable<any> {
    return this.http.get(this.placeUrl + id);
  }
}

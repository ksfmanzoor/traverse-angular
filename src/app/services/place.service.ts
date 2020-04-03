import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  placeUrl = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/place/';
  place;
  constructor(private  http: HttpClient) { }

  fetchPlace(): Observable<any> {
    return this.http.get(this.placeUrl);
  }
}

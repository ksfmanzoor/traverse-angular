import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  placeUrl = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/place/';
  place;
  constructor(private  http: HttpClient) { }

  fetchPlace() {
    return this.http.get(this.placeUrl);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Attraction} from '../models/attraction';

@Injectable({
  providedIn: 'root'
})
export class AttractionService {
  attractionUrl = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/attraction/';
  constructor(private httpClient: HttpClient) { }

  fetchAttraction(id): Observable<any> {
    return this.httpClient.get(this.attractionUrl + id);
  }
}

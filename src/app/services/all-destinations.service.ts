import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllDestinationsService {
  allDestinationURL = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/place/?minified=true';
  constructor(private httpClient: HttpClient) { }

  fetchAllDestinations(): Observable<any> {
    return this.httpClient.get(this.allDestinationURL);
  }
}

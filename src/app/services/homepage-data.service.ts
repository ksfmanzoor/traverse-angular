import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageDataService {
  private minifiedPlace = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/place/?minified=true?limit=5';

  constructor(private httpClient: HttpClient) { }

  fetchHomePlaces() {
    return this.httpClient.get(this.minifiedPlace);
  }

  fetchHomeBlogs() {
    return this.httpClient.get('');
  }
}

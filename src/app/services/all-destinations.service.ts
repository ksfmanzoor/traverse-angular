import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllDestinationsService {
  private headerDataUrl = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/cover/?type=destination';
  private allDestinationURL = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/place/?minified=true';
  constructor(private httpClient: HttpClient) { }

  getAllDestinationData(): Observable<any> {
    const headerData = this.httpClient.get(this.headerDataUrl);
    const allDestinationsData = this.httpClient.get(this.allDestinationURL);
    return forkJoin([headerData, allDestinationsData]);
  }
}

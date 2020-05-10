import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllDestinationsService {
  private headerDataUrl = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/cover/?type=destination';
  private allDestinationURL = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/place/?minified=true';
  private allAttractionURL = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/attraction/';
  constructor(private httpClient: HttpClient) { }

  getAllDestinationData(): Observable<any> {
    const headerData = this.httpClient.get(this.headerDataUrl);
    const allDestinationsData = this.httpClient.get(this.allDestinationURL);
    const allAttractionsData = this.httpClient.get(this.allAttractionURL);
    return forkJoin([headerData, allDestinationsData, allAttractionsData]);
  }
}

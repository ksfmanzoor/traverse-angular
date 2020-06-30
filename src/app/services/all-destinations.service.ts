import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllDestinationsService {
  private headerDataUrl = `${environment.baseUrl}traverse/cover/?type=destination`;
  private allDestinationURL = `${environment.baseUrl}traverse/place/?minified=true`;
  private allAttractionURL = `${environment.baseUrl}traverse/attraction/`;
  constructor(private httpClient: HttpClient) { }

  getAllDestinationData(): Observable<any> {
    const headerData = this.httpClient.get(this.headerDataUrl);
    const allDestinationsData = this.httpClient.get(this.allDestinationURL);
    const allAttractionsData = this.httpClient.get(this.allAttractionURL);
    return forkJoin([headerData, allDestinationsData, allAttractionsData]);
  }
}

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {forkJoin} from 'rxjs';
import {environment} from 'src/environments/environment';
import {MinifiedHomeData} from '../models/minified-home-data';

@Injectable({
  providedIn: 'root'
})
export class HomepageDataService {
  private headerDataURl = `${environment.baseUrl}traverse/cover/?type=home`;
  private minifiedDestinationUrl = `${environment.baseUrl}traverse/place/?minified=true&?limit=5`;
  private minifiedBlogUrl = `${environment.baseUrl}traverse/blog/post/?minified=true&limit=4`;

  constructor(private httpClient: HttpClient) {
  }

  getHomePageData() {
    const headerData = this.httpClient.get<any>(this.headerDataURl);
    const homeDestinations = this.httpClient.get<MinifiedHomeData>(this.minifiedDestinationUrl);
    const homeBlogs = this.httpClient.get<MinifiedHomeData>(this.minifiedBlogUrl);
    return forkJoin([headerData, homeDestinations, homeBlogs]);
  }
}

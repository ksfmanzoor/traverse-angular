import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin} from 'rxjs';
import {MinifiedHomeData} from '../models/minified-home-data';

@Injectable({
    providedIn: 'root'
})
export class HomepageDataService {
    private headerDataURl = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/cover/?type=home';
    private minifiedDestinationUrl = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/place/?minified=true&?limit=5';
    private minifiedBlogUrl = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/blog/post/?minified=true&limit=4';

    constructor(private httpClient: HttpClient) {
    }

    getHomePageData() {
        const headerData = this.httpClient.get<any>(this.headerDataURl);
        const homeDestinations = this.httpClient.get<MinifiedHomeData>(this.minifiedDestinationUrl);
        const homeBlogs = this.httpClient.get<MinifiedHomeData>(this.minifiedBlogUrl);
        return forkJoin([headerData, homeDestinations, homeBlogs]);
    }
}

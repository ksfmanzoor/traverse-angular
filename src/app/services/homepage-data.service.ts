import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HomepageDataService {
    private minifiedDestination = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/place/?minified=true&?limit=5';
    private minifiedBlog = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/blog/post/?minified=true&limit=5';

    constructor(private httpClient: HttpClient) {
    }

    fetchHomePlaces() {
        return this.httpClient.get(this.minifiedDestination);
    }

    fetchHomeBlogs() {
        return this.httpClient.get(this.minifiedBlog);
    }
}

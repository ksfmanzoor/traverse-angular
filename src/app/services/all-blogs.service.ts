import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllBlogsService {
  private headerDataUrl = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/cover/?type=blog_post';
  private allBlogsUrl = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/blog/post/?minified=true&limit=999';

  constructor(private httpClient: HttpClient) {
  }

  getAllBlogs(): Observable<any> {
    const headerData = this.httpClient.get(this.headerDataUrl);
    const allBlogsData = this.httpClient.get(this.allBlogsUrl);
    return forkJoin([headerData, allBlogsData]);
  }
}

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllBlogsService {
  private headerDataUrl = `${environment.baseUrl}traverse/cover/?type=blog_post`;
  private allBlogsUrl = `${environment.baseUrl}traverse/blog/post/?minified=true&limit=999`;

  constructor(private httpClient: HttpClient) {
  }

  getAllBlogs(): Observable<any> {
    const headerData = this.httpClient.get(this.headerDataUrl);
    const allBlogsData = this.httpClient.get(this.allBlogsUrl);
    return forkJoin([headerData, allBlogsData]);
  }
}

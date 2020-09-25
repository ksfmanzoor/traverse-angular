import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogUrl = `${environment.baseUrl}traverse/blog/post/`;
  private commentUrl = `${environment.baseUrl}traverse/blog/comment/?blog_post=`;

  constructor(private http: HttpClient) { }

  fetchBlogData(slug): Observable<any> {
    const blogData = this.http.get(this.blogUrl + slug);
    const commentsData = this.http.get(this.commentUrl + slug);
    return forkJoin([blogData, commentsData]);
  }
}

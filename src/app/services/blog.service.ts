import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogUrl = `${environment.baseUrl}traverse/blog/post/`;

  constructor(private http: HttpClient) { }

  fetchBlog(id): Observable<any> {
    return this.http.get(this.blogUrl + id);
  }
}

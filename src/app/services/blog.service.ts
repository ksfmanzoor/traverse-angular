import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogUrl = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/blog/post/?limit=10';

  constructor(private http: HttpClient) { }

  fetchBlogs(): Observable<any> {
    return this.http.get(this.blogUrl);
  }
}

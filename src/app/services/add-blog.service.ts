import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddBlogService {
  private url = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/blog/post/';
  constructor(private httpClient: HttpClient) { }

  addBlog(blogData) {
    return this.httpClient.post(this.url, blogData);
  }
}

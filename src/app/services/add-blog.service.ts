import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddBlogService {
  private url = `${environment.baseUrl}traverse/blog/post/`;
  constructor(private httpClient: HttpClient) { }

  addBlog(blogData) {
    return this.httpClient.post(this.url, blogData);
  }

  updateBlog(id , blogData) {
    return this.httpClient.patch(this.url + id + '/', blogData);
  }
}

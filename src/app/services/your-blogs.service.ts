import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class YourBlogsService {
  private yourBlogsURL = `${environment.baseUrl}traverse/blog/post?user=`;

  constructor(private httpClient: HttpClient) { }

  getYourBlogs(id): Observable<any> {
    return this.httpClient.get(`${this.yourBlogsURL + id}&limit=999`);
  }
}

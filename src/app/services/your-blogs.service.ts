import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class YourBlogsService {
  private yourBlogsURL = `${environment.baseUrl}traverse/blog/post?user=6f12e662-c28b-452d-a6ad-b0357a39e835&limit=9`;

  constructor(private httpClient: HttpClient) { }

  getYourBlogs(): Observable<any> {
    return this.httpClient.get(this.yourBlogsURL);
  }
}

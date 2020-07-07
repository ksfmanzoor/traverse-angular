import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllBlogsService {
  private headerDataUrl = `${environment.baseUrl}traverse/cover/?type=blog_post`;
  private allBlogsUrl = `${environment.baseUrl}traverse/blog/post/?minified=true&limit=999`;
  private unpublishedBlogsUrl = `${environment.baseUrl}traverse/blog/post/?unpublished=true&minified=true&limit=999`;

  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) {
  }

  getAllBlogs(): Observable<any> {
    const responseArray = [];
    const headerData = this.httpClient.get(this.headerDataUrl);
    const allBlogsData = this.httpClient.get(this.allBlogsUrl);
    responseArray.push(headerData);
    responseArray.push(allBlogsData);
    if (!!this.authenticationService.currentUserValue) {
      if (this.authenticationService.currentUserValue.is_superuser) {
        const unpublishedBlogs = this.httpClient.get(this.unpublishedBlogsUrl);
        responseArray.push(unpublishedBlogs);
      }
    }
    return forkJoin(responseArray);
  }
}

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {YourBlogsService} from 'src/app/services/your-blogs.service';

@Injectable({
  providedIn: 'root'
})
export class YourBlogsResolverService implements Resolve<any> {

  constructor(private yourBlogsService: YourBlogsService, private authenticationService: AuthenticationService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const user = this.authenticationService.currentUserValue;
    return this.yourBlogsService.getYourBlogs(user.id);
  }
}

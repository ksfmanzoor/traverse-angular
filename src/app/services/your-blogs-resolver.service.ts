import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {YourBlogsService} from 'src/app/services/your-blogs.service';

@Injectable({
  providedIn: 'root'
})
export class YourBlogsResolverService implements Resolve<any> {

  constructor(private yourBlogsService: YourBlogsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.yourBlogsService.getYourBlogs();
  }
}

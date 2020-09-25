import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Blog} from '../models/blog';
import {BlogService} from './blog.service';

@Injectable({
  providedIn: 'root'
})
export class BlogResolverService implements Resolve<Blog> {

  constructor(private blogService: BlogService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Blog> | Promise<Blog> | Blog {
    return this.blogService.fetchBlogData(route.params.slug);
  }
}

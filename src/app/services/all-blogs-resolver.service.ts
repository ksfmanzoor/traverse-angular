import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {MinifiedHomeData} from '../models/minified-home-data';
import {Observable} from 'rxjs';
import {AllBlogsService} from './all-blogs.service';

@Injectable({
  providedIn: 'root'
})
export class AllBlogsResolverService implements Resolve<MinifiedHomeData> {

  constructor(private allBlogsService: AllBlogsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MinifiedHomeData> | Promise<MinifiedHomeData> | MinifiedHomeData {
    return this.allBlogsService.getAllBlogs();
  }
}

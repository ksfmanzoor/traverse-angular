import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {SearchResult} from 'src/app/models/search-result';
import {SearchService} from 'src/app/services/search.service';

@Injectable({
  providedIn: 'root'
})
export class SearchResolverService implements Resolve<SearchResult> {

  constructor(private searchService: SearchService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SearchResult> | Promise<SearchResult> | SearchResult {
    return this.searchService.searchQuery(route.params.query);
  }
}

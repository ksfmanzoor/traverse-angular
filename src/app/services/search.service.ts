import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchURL = `${environment.baseUrl}/traverse/search?query=`;

  constructor(private httpClient: HttpClient) { }

  searchQuery(query): any {
    return this.httpClient.get(this.searchURL + query);
  }
}

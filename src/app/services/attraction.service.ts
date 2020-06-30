import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttractionService {
  attractionUrl = `${environment.baseUrl}traverse/attraction/`;
  constructor(private httpClient: HttpClient) { }

  fetchAttraction(id): Observable<any> {
    return this.httpClient.get(this.attractionUrl + id);
  }
}

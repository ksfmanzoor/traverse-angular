import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  public changeNavColor: BehaviorSubject<any>;


  constructor() {
   this.changeNavColor = new BehaviorSubject('');
  }
}

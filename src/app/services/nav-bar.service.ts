import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  public changeNavColor: BehaviorSubject<any>;
  public changeVisibility: BehaviorSubject<boolean>;

  constructor() {
    this.changeNavColor = new BehaviorSubject('');
    this.changeVisibility = new BehaviorSubject<boolean>(true);
  }
}

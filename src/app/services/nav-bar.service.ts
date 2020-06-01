import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  public navBarSubject: BehaviorSubject<boolean>;
  public navBarValue: Observable<boolean>;

  constructor() {
    this.navBarSubject = new BehaviorSubject<boolean>(false);
    this.navBarValue = this.navBarSubject.asObservable();
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  rowDecider(arrayLength: number, columnNumber: number) {
    if (arrayLength % 10 > 5) {
      return Math.ceil(arrayLength / columnNumber);
    } else {
      return Math.floor(arrayLength / columnNumber);
    }
  }
}

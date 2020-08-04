import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor() { }

  isDefined(val: any): boolean {
    if (typeof val === 'undefined' || val === null || val === '') {
      return false;
    }
    return true;
  }
}

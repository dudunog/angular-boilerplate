import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
    // do nothing.
  }

  /**
  * The method responsible for fetching data from localStorage.
  *
  * @param key - the key
  * @returns string
  */
  getItem(key: string): string {
    return localStorage.getItem(key);
  }

  /**
  * The method responsible for set data in localStorage.
  *
  * @param key - the key
  * @param value - the value
  * @returns void
  */
  setItem(key: string, value: string): void {
    return localStorage.setItem(key, value);
  }
}

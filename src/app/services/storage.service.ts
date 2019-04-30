import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getData(key: string): any{
    // JSON.parse is used because the local storage stores data as key-value pairs, and the values are stored as strings. so, if we want to have a real object(or list) to work with, we must parse the string into a valid Javascrip object.
    return JSON.parse(localStorage.getItem(key));
  }

  setData(key: string, data: any){
    localStorage.setItem(key, JSON.stringify(data));
  }
}

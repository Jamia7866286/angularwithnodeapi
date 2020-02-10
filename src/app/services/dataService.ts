import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  isAuthenticated() {
    newFunction();
  }
  constructor() { }

  jsondata = {
    email: 'naseemahmadjmi96@gmail.com',
    password: 'neuro',
  };

  isloading: boolean;
}
function newFunction() {
    throw new Error('Method not implemented.');
}


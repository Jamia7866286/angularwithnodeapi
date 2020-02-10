import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = 'http://localhost:3000/';

  constructor( private httpclient: HttpClient) { }

  adminlogin(userdata){
    return this.httpclient.post(this.baseUrl + 'admin/login', userdata);
  }
}

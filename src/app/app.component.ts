import { Component, OnInit } from '@angular/core';
import { DataserviceService } from './services/dataService';
import { LoginComponent } from './pages/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-neurosensum-custom-dashboard-app';
  constructor(protected data: DataserviceService, private _router: Router) {

  }
  ngOnInit() {
    this.data.isloading = false;
  }

  logout() {
    // localStorage.removeItem('username');
    localStorage.clear();
    this._router.navigate(['./login']);
    // console.log(localStorage.clear());
    this.data.isloading = false;
  }
}

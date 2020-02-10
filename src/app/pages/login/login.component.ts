import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataService';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submiitteddata = false;
  constructor(
    private login: FormBuilder,
    private _router: Router,
    private data: DataserviceService,
    private adminservice: AdminService
  ) {
    // redirect to home if already logged in
    if (this.data.isloading) {
      this._router.navigate(['/']);
    }
  }

  ngOnInit() {
    // if (this.data.isloading) {
    //   this._router.navigate(['/overview']);
    // }
    this.loginForm = this.login.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(formValue: any) {
    this.submiitteddata = true;
    // if (formValue.email === this.data.jsondata.email) {
    //   console.log(formValue.email === this.data.jsondata.email);
    //   localStorage.setItem('username', this.data.jsondata.email);
    //   this._router.navigate(['./overview']);
    //   this.data.isloading = true;
    // }

    this.adminservice.adminlogin(formValue).subscribe((res: any) => {
      if (res.status === 'success') {
        alert('login success');
      }
    }, (err) => {
      console.log(err);
    });
  }

}

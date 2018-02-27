import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bhco-login',
  templateUrl: './bhco-login.component.html',
  styleUrls: ['./bhco-login.component.css']
})
export class BhcoLoginComponent implements OnInit {

  constructor(
    public router : Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.router.navigateByUrl('layout')
  }

  back() {
    this.router.navigateByUrl('login')
  }

  forgotpwd() {
    this.router.navigateByUrl('forgotPwd')
  }
}

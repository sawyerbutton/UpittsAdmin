import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sys-login',
  templateUrl: './sys-login.component.html',
  styleUrls: ['./sys-login.component.css']
})
export class SysLoginComponent implements OnInit {
  roles = [
    {value: 'system', viewValue: 'System'},
    {value: 'state', viewValue: 'State'},
    {value: 'community', viewValue: 'Community'}
  ];
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  login(){
    this.router.navigateByUrl('');
  }

  back(){
    this.router.navigateByUrl('login');
  }

  forgotpwd(){
    this.router.navigateByUrl('forgotPwd')
  }
}

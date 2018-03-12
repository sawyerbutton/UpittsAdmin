import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms';
import { ValidationService } from '../../shared/validation-service/validation.service';
import {InputAttributes, SelectAttributes,Admins} from '../../shared/shared-control/attributes';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-sys-login',
  templateUrl: './sys-login.component.html',
  styleUrls: ['./sys-login.component.css'],
  providers: [ NgModel ]
})
export class SysLoginComponent implements OnInit {
  private roleName;

  public role = Admins;

  public userName: InputAttributes = {name:'username',min:4,max:32, placeholder:'username', type: 'text'};
  public passWord: InputAttributes = {name:'password',min:8,max:32, placeholder: 'password', type: 'password'};
  public admin: SelectAttributes = {name:'admin',roles:this.role, placeholder: 'admin'};
  public userForm:any;
  constructor(
    public router: Router,
    private fb: FormBuilder
  ) {
    this.userForm= this.fb.group(
      {
        'password': ['',[ Validators.required,ValidationService.passwordValidator]],
        'username': ['',[ Validators.required,Validators.minLength(4)]],
        'admin': ['',[ Validators.required]]
      }
    );
  }

  ngOnInit() {
    console.log(this.userForm.invalid)
    console.log(this.admin.roles);
  }


  getRole(value : string) {
    console.log(value);
    return this.admin.roles;
  }

  login(){
    //this.roleName = this.getRole();
    if (this.roleName == "system") {
      this.router.navigateByUrl('SysDashboard');
    } else if (this.roleName == "state") {
      this.router.navigateByUrl('StateDashboard');
    } else {
      this.router.navigateByUrl('CommunityDashboard');
    }

  }

  back(){
    this.router.navigateByUrl('login');
  }

  forgotPwd(){
    this.router.navigateByUrl('forgotPwd')
  }
}

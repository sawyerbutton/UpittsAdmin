import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms';
import { ValidationService } from '../../shared/validation-service/validation.service';
import {InputAttributes, SelectAttributes,Admins} from '../../shared/shared-control/attributes';
import {AuthenticationService} from "../loginService/authentication.service";
import {AlertService} from "../loginService/alert.service";

@Component({
  selector: 'app-sys-login',
  templateUrl: './sys-login.component.html',
  styleUrls: ['./sys-login.component.css']
})
export class SysLoginComponent implements OnInit {
  public role = Admins;

  public userName: InputAttributes = {name:'username',min:4,max:32, placeholder:'username', type: 'text'};
  public passWord: InputAttributes = {name:'password',min:8,max:32, placeholder: 'password', type: 'password'};
  public admin: SelectAttributes = {name:'admin',roles:this.role, placeholder: 'admin'};
  public userForm:any;

  //backend para
  userNamePara :string;
  userPasswordPara: string;
  userAdminPara:string;

  //login service
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private autenticationService: AuthenticationService,
    private alertService: AlertService
  ) {

  }

  ngOnInit() {
    //reset login status
    this.autenticationService.logout();

    //get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];

    this.userForm= this.fb.group(
      {
        'password': ['',[ Validators.required,ValidationService.passwordValidator]],
        'username': ['',[ Validators.required,Validators.minLength(4)]],
        'admin': ['',[ Validators.required]]
      }
    );
    // console.log(this.userForm.invalid)
    // console.log(this.admin.roles);
  }

  getUserName(value:string){
    if(value){
      this.userNamePara = value;
      console.log("username:"+this.userNamePara);
    }
  }

  getUserPassword(value: string){
    if(value){
      this.userPasswordPara = value;
      console.log("password:"+this.userPasswordPara);
    }
  }

  getUserAdmin(value: string){
    if(value){
      this.userAdminPara = value;
      console.log("role:"+this.userAdminPara);
    }
  }

  login(){
    //this.roleName = this.getRole();
    if (this.userAdminPara === "system") {
      this.router.navigateByUrl('SysDashboard');
    } else if (this.userAdminPara === "state") {
      this.router.navigateByUrl('StateDashboard');
    } else {
      this.router.navigateByUrl('CommunityDashboard');
    }
  }

  loginSubmit() {
    this.loading = true;
    this.autenticationService.login(this.userNamePara, this.userPasswordPara, this.userAdminPara).subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  }

  back(){
    this.router.navigateByUrl('login');
  }

  forgotPwd(){
    this.router.navigateByUrl('forgotPwd')
  }
}

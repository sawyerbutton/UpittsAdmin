import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { States } from '../../../../shared/shared-control/attributes'
import { SelectAttributes} from '../../../../shared/shared-control/attributes';
import { InputAttributes } from '../../../../shared/shared-control/attributes';
import { ValidationService} from '../../../../shared/validation-service/validation.service';
import {CommunityAdmin, StateAdmin} from "../../../../model/User";
import {UserService} from "../../../../service/user.service";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  //Form group
  public userForm: FormGroup;
  public firstFormGroup: FormGroup;
  //front-end para
  public states = States;
  public state: string;
  public name: string;

  //structure para
  public isLinear = true;
  //validator para
  public selectStates : SelectAttributes = {name:'state',roles:this.states,placeholder:'states'};
  public userName : InputAttributes = {name:'username',min:4,max:32,placeholder:'username',type:'text'};
  public passWord: InputAttributes = {name:'password',min:8,max:32,placeholder:'password',type:'password'};
  public confirmPassword : InputAttributes = {name:'confirmPassword',min:4,max:32,placeholder:'confirm password',type:'password'};

  public userFirstName : InputAttributes = {name:'firstName', min: 4, max:32, placeholder:'First Name', type: 'text'};
  public userLastName: InputAttributes = {name: 'lastName', min: 4, max: 32, placeholder: 'Last Name', type: 'text'};
  public userPhone: InputAttributes = {name: 'phone', min: 4, max: 32, placeholder: 'Phone', type: 'text'};
  public userEmail: InputAttributes = {name: 'email', min: 4, max: 32, placeholder: 'Email', type: 'text'};

  //backend para
  statePara: string;
  userNamePara: string;
  userPasswordPara: string;
  userConPasswordPara: string;
  firstNamePara: string;
  lastNamePara: string;
  phonePara: string;
  emailPara: string;

  stateAdmins: StateAdmin[];
  confirm: boolean=false;

  constructor(
    private fb: FormBuilder,
    private stateAdminService: UserService
    //public router: Router,
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getStateAdmin();
  }

  getStateAdmin(): void {
    this.stateAdminService.getStateAdmin()
      .subscribe( stateAdmin => this.stateAdmins = stateAdmin);
  }

  buildForm(): void {
    this.firstFormGroup = this.fb.group({
      state: ['', [Validators.required]]
    });
    this.userForm = this.fb.group({
      username:['',[ Validators.required,Validators.minLength(4)]],
      password:['',[Validators.required,ValidationService.passwordValidator]],
      confirmPassword: ['',[Validators.required,Validators.minLength(8)]],
      firstName:['',[ Validators.required,Validators.minLength(4)]],
      lastName:['',[ Validators.required,Validators.minLength(4)]],
      phone:['',[ Validators.required,Validators.minLength(4)]],
      email:['',[ Validators.required,Validators.minLength(4)]]
    });
  }

  getState(value:string){
    if(value){
      this.statePara = value;
      console.log("username:"+this.statePara);
    }
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

  getUserConPassword(value: string){
    if(value){
      this.userConPasswordPara = value;
      console.log("password:"+this.userConPasswordPara);
    }
  }

  getFirstName(value: string) {
    if (value) {
      this.firstNamePara = value;
      console.log("firstName:"+this.firstNamePara);
    }
  }

  getLastName(value: string) {
    if (value) {
      this.lastNamePara = value;
      console.log('lastName:'+this.lastNamePara);
    }
  }

  getPhone(value: string) {
    if (value) {
      this.phonePara = value;
    }
  }

  getEmail(value: string) {
    if(value) {
      this.emailPara= value;
    }
  }

  addStateAdmin() {
    const newStateAdmin = new StateAdmin({
      username: this.userNamePara,
      password: this.userPasswordPara,
      firstname: this.firstNamePara,
      lastname: this.lastNamePara,
      email: this.emailPara,
      phone: this.phonePara,
      state: this.statePara,
    });

    this.stateAdminService.addStateAdmin(newStateAdmin)
      .subscribe(stateAdmin => this.stateAdmins.push(stateAdmin));
    console.log(newStateAdmin);

    this.confirm = true;
  }

}

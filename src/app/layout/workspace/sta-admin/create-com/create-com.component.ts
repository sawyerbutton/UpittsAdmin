import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SelectAttributes} from '../../../../shared/shared-control/attributes';
import { InputAttributes } from '../../../../shared/shared-control/attributes';
import { ValidationService} from '../../../../shared/validation-service/validation.service';
import { States } from '../../../../shared/shared-control/attributes';


@Component({
  selector: 'app-create-com',
  templateUrl: './create-com.component.html',
  styleUrls: ['./create-com.component.css']
})
export class CreateComComponent implements OnInit {
  //state import
  public states = States;
  //default value of stepper
  public isLinear = true;
  //initialize the formGroup
  public userForm: FormGroup;
  public communityGroup: FormGroup;

  public selectStates : SelectAttributes = {name:'state',roles:this.states,placeholder:'state'};
  public selectCounty: SelectAttributes = {name:'county',roles:this.states,placeholder:'county'};
  public selectCity: SelectAttributes = {name:'city',roles:this.states,placeholder:'city'};
  public selectCommunity: SelectAttributes = {name:'community',roles:this.states,placeholder:'community'};
  public userName : InputAttributes = {name:'username',min:4,max:32,placeholder:'username', type: 'text'};
  public passWord: InputAttributes = {name:'password',min:8,max:32,placeholder:'password',type:'password'};
  public confirmPassword : InputAttributes = {name:'confirmPassword',min:4,max:32,placeholder:'confirm password',type:'password'};
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.communityGroup = this.fb.group({
      state: ['', [Validators.required]],
      county:['',[Validators.required]],
      city:['',[Validators.required]],
      community:['',[Validators.required]]
    });
    this.userForm = this.fb.group({
      username:['',[ Validators.required,Validators.minLength(4)]],
      password:['',[Validators.required,ValidationService.passwordValidator]],
      confirmPassword: ['',[Validators.required,Validators.minLength(8)]]
    });
  }


}

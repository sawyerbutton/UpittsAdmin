import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { SelectAttributes} from '../../../../shared/shared-control/attributes';
import { InputAttributes } from '../../../../shared/shared-control/attributes';
import { ValidationService} from '../../../../shared/validation-service/validation.service';
import { States} from '../../../../shared/shared-control/attributes';

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

  public selectStates : SelectAttributes = {name:'state',roles:this.states};
  public selectCounty: SelectAttributes = {name:'county',roles:this.states};
  public selectCity: SelectAttributes = {name:'city',roles:this.states};
  public selectCommunity: SelectAttributes = {name:'community',roles:this.states};
  public userName : InputAttributes = {name:'username',min:4,max:32};
  public passWord: InputAttributes = {name:'password',min:8,max:32};
  public confirmPassword : InputAttributes = {name:'confirmPassword',min:4,max:32};
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

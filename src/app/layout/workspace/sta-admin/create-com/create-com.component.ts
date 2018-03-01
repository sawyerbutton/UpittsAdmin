import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { comUser } from './comUser-model'
import { Router } from '@angular/router';

const States = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

@Component({
  selector: 'app-create-com',
  templateUrl: './create-com.component.html',
  styleUrls: ['./create-com.component.css']
})
export class CreateComComponent implements OnInit {
  public states = States;
  public userInfo: comUser = new comUser();
  public userForm: FormGroup;
  public isLinear = true;
  public communityGroup: FormGroup;
  public formErrors = {
    'userName': '',
    'password': '',
    'confirmPassword': '',
  };
  public validationMessages = {
    'userName': {
      'required': 'UserName must input.',
      'minlength': 'UserName must be in 4-32 characters.'
    },
    'password': {
      'required': 'Password must input',
      'minlength': 'Password must be greater than 8 characters. '
    },
    'confirmPassword': {
      'required': 'ConfirmPassword must be input.',
      'minlength': 'Password must be greater than 8 characters. ',
      'validateEqual': 'Password and ConfirmPassword must be same. '
    }
  };
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.communityGroup = this.fb.group({
      state: ['', Validators.required],
      county: ['', Validators.required],
      city: ['', Validators.required],
      community: ['', Validators.required]
    });
    this.userForm = this.fb.group({
      "userName": [
        this.userInfo.userName,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(32)
        ]
      ],
      "password": [
        this.userInfo.password,
        [
          Validators.required,
          Validators.minLength(8),
        ]
      ],
      "confirmPassword": [
        this.userInfo.confirmPassword,
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
    });
    this.userForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

}

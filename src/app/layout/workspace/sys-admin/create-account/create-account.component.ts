
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from './user-model'
//import { Router } from '@angular/router';

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
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  public userForm: FormGroup;
  public userInfo: User = new User();
  public firstFormGroup: FormGroup;
  public states = States;
  public isLinear = true;
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
    public fb: FormBuilder,
    //public router: Router,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
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

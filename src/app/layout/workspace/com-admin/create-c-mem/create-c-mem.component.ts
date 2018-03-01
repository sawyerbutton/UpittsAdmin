import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {memUser} from './memUser-model';


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
  selector: 'app-create-c-mem',
  templateUrl: './create-c-mem.component.html',
  styleUrls: ['./create-c-mem.component.css']
})
export class CreateCMemComponent implements OnInit {
  public userForm: FormGroup;
  public userInfo: memUser = new memUser();
  public firstFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public states = States;
  public isLinear = true;
  public formErrors = {
    'userName': '',
    'password': '',
    'confirmPassword': '',
    'firstName': '',
    'lastName': '',
    'phone': '',
    'address1': '',
    'address2': '',
    'city': '',
    'zipcode': ''
  };
  public validationMessages = {
    'userName': {
      'required': 'UserName must input.',
      'minlength': 'UserName must be in 4-32 characters.',
      'maxlength': 'UserName must be in 4-32 characters.'
    },
    'password': {
      'required': 'Password must input',
      'minlength': 'Password must be greater than 8 characters. '
    },
    'confirmPassword': {
      'required': 'ConfirmPassword must be input.',
      'minlength': 'Password must be greater than 8 characters. ',
      'validateEqual': 'Password and ConfirmPassword must be same. '
    },
    'firstName': {
      'required': 'First name must input.',
      'maxlength': 'Phone number must in 32 characters.'
    },
    'lastName': {
      'required': 'Last name must input.',
      'maxlength': 'Last name must be in 32 characters.',
    },
    'midName': {
      'maxlength': 'Mid name must be in 32 characters.',
    },
    'phone': {
      'required': 'Phone number must input.',
      'minlength': 'Phone number must be 10 characters.',
      'maxlength': 'Phone number must be 10 characters.'
    },
    'address1': {
      'required': 'Address must input.',
      'maxlength': 'Address must in 32 characters.'
    },
    'address2': {
      'maxlength': 'Address number must in 32 characters.'
    },
    'city': {
      'required': 'City must input.',
      'maxlength': 'City must in 32 characters.'
    },
    'zipcode': {
      'required': 'Zipcode must input.',
      'maxlength': 'Zipcode must be 5 characters.',
      'minlength': 'Zipcode must be 5 characters.'
    },

  };
  constructor(
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      "block": ['', Validators.required],
      "family": ['', Validators.required]
    });
    this.thirdFormGroup = this.fb.group({
      "race": ['', Validators.required],
      "marital": ['', Validators.required],
      "education": ['', Validators.required],
      "employment": ['', Validators.required],
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
      "firstName": [
        this.userInfo.firstName,
        [
          Validators.required,
          Validators.maxLength(32)
        ]
      ],
      "lastName": [
        this.userInfo.lastName,
        [
          Validators.required,
          Validators.maxLength(32)
        ]
      ],
      'midName': [
        this.userInfo.midName,
        [
          Validators.maxLength(32)
        ]
      ],
      'gender' : ['', Validators.required],
      'phone' : [
        this.userInfo.phone,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
        ]
      ],
      'birth': ['', Validators.required],
      'address1' : [
        this.userInfo.address1,
        [
          Validators.required,
          Validators.maxLength(32)
        ]
      ],
      'address2' :
        [
          this.userInfo.address2,
          [
            Validators.maxLength(32)
          ]
        ],
      'city': [
        this.userInfo.city,
        [
          Validators.required,
          Validators.maxLength(32)
        ]
      ],
      'state': ['', Validators.required],
      'zipcode': [
        this.userInfo.zipcode,
        [
          Validators.required,
          Validators.maxLength(5),
          Validators.minLength(5)
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

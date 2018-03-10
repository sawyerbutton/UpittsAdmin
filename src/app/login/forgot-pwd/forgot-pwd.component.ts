import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Validators,FormBuilder} from '@angular/forms';
import { ValidationService} from '../../shared/validation-service/validation.service';
import { InputAttributes} from '../../shared/shared-control/attributes';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent implements OnInit {

  public userForm : any;
  public email: InputAttributes = {name:'email',min:6,max:32, placeholder: 'email', type: 'email'};
  constructor(
    public router : Router,
    private fb:  FormBuilder
  ) {
    this.userForm= this.fb.group(
      {
        'email': ['',[ Validators.required,ValidationService.emailValidator]]
      }
    );

    //console.log(this.userForm);

  }

  ngOnInit() {

  }

  back() {
    this.router.navigateByUrl('login')
  }

  sentRequest(){
    //
  }

}

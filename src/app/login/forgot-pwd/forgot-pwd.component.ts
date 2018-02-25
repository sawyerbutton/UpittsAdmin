import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(

    public router : Router
  ) { }

  ngOnInit() {

  }

  back() {
    this.router.navigateByUrl('login')
  }

  sentRequest(){
    //
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }



}

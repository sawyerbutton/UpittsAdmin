import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-member-login',
  templateUrl: './member-login.component.html',
  styleUrls: ['./member-login.component.css']
})
export class MemberLoginComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.router.navigateByUrl('')
  }

  back() {
    this.router.navigateByUrl('login')
  }

  forgotPwd() {
    this.router.navigateByUrl('forgotPwd')
  }


}

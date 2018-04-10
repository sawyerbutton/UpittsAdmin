import { Component, OnInit } from '@angular/core';
import {Users} from "../../../login/loginService/Users";
import {LoginService} from "../../../login/loginService/login.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  currentUser: Users;
  role: string;

  constructor(private userService: LoginService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    if (this.currentUser.isSys) {
      this.role = "System Administrator";
    } else if (this.currentUser.isState) {
      this.role = "State Administrator";
    } else if (this.currentUser.isCommunity) {
      this.role = "Community Administrator";
    } else if (this.currentUser.isBHCO) {
      this.role = "BHCO";
    } else {
      this.role = "Community Member";
    }
  }

}

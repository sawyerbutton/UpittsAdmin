import { Component, OnInit } from '@angular/core';
import {users} from "../../../login/loginService/Users";
import {LoginService} from "../../../login/loginService/login.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  currentUser: users;

  constructor(private userService: LoginService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

}

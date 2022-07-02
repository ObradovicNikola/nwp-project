import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginInterface } from 'src/app/models/dto/UserLoginInterface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onLoginSubmit: (userLogin: UserLoginInterface) => void = (
    userLogin: UserLoginInterface
  ) => {
    try {
      this.userService.login(userLogin);
    } catch (error) {
      console.log(error);
    }
  };
}

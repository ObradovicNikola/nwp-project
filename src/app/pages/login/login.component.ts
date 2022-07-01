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
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  onLoginSubmit: (userLogin: UserLoginInterface) => void = (
    userLogin: UserLoginInterface
  ) => {
    this.userService.login(userLogin).subscribe({
      next: (response) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/']);
        }
      },
      error: (error) => {
        console.log('Error...');
        console.log(error);
      },
    });
  };
}

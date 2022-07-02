import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegisterInterface } from 'src/app/models/dto/UserRegisterInterface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass'],
})
export class SignupComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  onLoginSubmit: (userRegister: UserRegisterInterface) => void = (
    userRegister: UserRegisterInterface
  ) => {
    this.userService.register(userRegister).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.log('Error...');
        console.log(error);
      },
    });
  };
}

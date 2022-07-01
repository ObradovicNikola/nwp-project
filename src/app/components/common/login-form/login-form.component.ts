import { Component, Input, OnInit } from '@angular/core';
import { UserLoginInterface } from 'src/app/models/dto/UserLoginInterface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass'],
})
export class LoginFormComponent implements OnInit {
  @Input() handleDialogSubmit!: (model: UserLoginInterface) => void;

  model: UserLoginInterface = {
    email: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}

  prepareAndSubmit(): void {
    this.model.email = this.model.email.trim();
    this.handleDialogSubmit(this.model);
  }
}

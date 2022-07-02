import { Component, Input, OnInit } from '@angular/core';
import { UserRegisterInterface } from 'src/app/models/dto/UserRegisterInterface';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass'],
})
export class RegisterFormComponent implements OnInit {
  @Input() handleDialogSubmit!: (model: UserRegisterInterface) => void;

  model: UserRegisterInterface = {
    name: '',
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

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  isLoggedIn() {
    if (localStorage.getItem('token')) return true;
    return false;
  }
}

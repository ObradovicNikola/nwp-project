import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGardService implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}
  canActivate(): boolean {
    if (this.userService.isLoggedIn()) return true;
    this.router.navigate(['login']);
    return false;
  }
}

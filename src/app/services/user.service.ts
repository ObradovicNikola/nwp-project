import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { UserLoginInterface } from '../models/dto/UserLoginInterface';
import { UserRegisterInterface } from '../models/dto/UserRegisterInterface';
import { TransactionResponseInterface } from '../models/entities/TransactionResponseInterface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private expensesUrl = 'http://127.0.0.1:8081/api';
  private config = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  isLoggedIn: boolean = false;
  isLoggedInChange: Subject<boolean> = new Subject<boolean>();

  username: string = '';
  usernameChange: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient, private router: Router) {
    this.isLoggedInChange.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });

    this.usernameChange.subscribe((username) => {
      this.username = username;
    });
  }

  private setLoggedIn(isLoggedIn: boolean) {
    this.isLoggedInChange.next(isLoggedIn);
  }

  me(): Observable<any> {
    return this.http.get(`${this.expensesUrl}/users/me`, this.config);
  }

  login(userLogin: UserLoginInterface): void {
    this.http
      .post(`${this.expensesUrl}/auth/login`, userLogin, this.config)
      .subscribe({
        next: (response: any) => {
          if (response.token) {
            localStorage.setItem('token', response.token);
            this.setLoggedIn(true);
            this.me().subscribe({
              next: (user) => {
                if (user.name) {
                  this.usernameChange.next(user.name);
                  this.router.navigate(['/']);
                } else {
                  this.logout();
                  throw new Error("Oops, can't find the user");
                }
              },
              error: (error) => {
                throw error;
              },
            });
          } else {
            throw new Error("Oops, can't find the token");
          }
        },
        error: (error) => {
          // Error in service, rethrowing...
          throw error;
        },
      });
  }

  register(userRegister: UserRegisterInterface): Observable<any> {
    return this.http.post(
      `${this.expensesUrl}/auth/register`,
      userRegister,
      this.config
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.setLoggedIn(false);
    this.router.navigate(['/login']);
  }
}

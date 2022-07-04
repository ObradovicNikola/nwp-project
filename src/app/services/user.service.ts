import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { MySnackbarComponent } from '../components/common/my-snackbar/my-snackbar.component';
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

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.isLoggedInChange.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });

    this.usernameChange.subscribe((username) => {
      this.username = username;
    });

    if (localStorage.getItem('token')) {
      this.setLoggedIn(true);
      this.me().subscribe({
        next: (user) => {
          if (user.name) {
            this.usernameChange.next(user.name);
          } else {
            this.logout();
            throw new Error("Oops, can't find the user");
          }
        },
        error: (error) => {
          throw error;
        },
      });
    }
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
          this.snackBar.openFromComponent(MySnackbarComponent, {
            data: {
              message:
                error &&
                error.error &&
                error.error.errors &&
                error.error.errors[0]
                  ? error.error.errors[0]
                  : 'Oops, something went wrong',
              type: 'is-danger',
            },
          });
          throw error;
        },
      });
  }

  register(userRegister: UserRegisterInterface): void {
    this.http
      .post(`${this.expensesUrl}/auth/register`, userRegister, this.config)
      .subscribe({
        next: () => {
          this.router.navigate(['/login']);
          this.snackBar.openFromComponent(MySnackbarComponent, {
            data: {
              message: 'You have successfully registered, please login',
              type: 'is-info',
            },
          });
        },
        error: (error) => {
          // Error in service, rethrowing...
          this.snackBar.openFromComponent(MySnackbarComponent, {
            data: {
              message:
                error &&
                error.error &&
                error.error.errors &&
                error.error.errors[0]
                  ? error.error.errors[0]
                  : 'Oops, something went wrong',
              type: 'is-danger',
            },
          });
          throw error;
        },
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.setLoggedIn(false);
    this.router.navigate(['/login']);
  }
}

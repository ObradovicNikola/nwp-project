import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginInterface } from '../models/dto/UserLoginInterface';
import { TransactionResponseInterface } from '../models/entities/TransactionResponseInterface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private expensesUrl = 'http://127.0.0.1:8081/api';
  constructor(private http: HttpClient) {}

  config = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  getExpenses(): Observable<TransactionResponseInterface[]> {
    return this.http.get<TransactionResponseInterface[]>(this.expensesUrl);
  }

  isLoggedIn() {
    if (localStorage.getItem('token')) return true;
    return false;
  }

  login(userLogin: UserLoginInterface): Observable<any> {
    return this.http.post(
      `${this.expensesUrl}/auth/login`,
      userLogin,
      this.config
    );
  }

  logout() {
    localStorage.removeItem('token');
  }
}

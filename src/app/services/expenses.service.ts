import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionRequestInterface } from '../models/entities/TransactionRequestInterface';
import { TransactionResponseInterface } from '../models/entities/TransactionResponseInterface';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  private expensesUrl = 'http://127.0.0.1:8081/api/expenses';
  constructor(private http: HttpClient) {}

  config = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  getExpenses(): Observable<TransactionResponseInterface[]> {
    return this.http.get<TransactionResponseInterface[]>(this.expensesUrl);
  }

  getExpense(id: number): Observable<TransactionResponseInterface> {
    return this.http.get<TransactionResponseInterface>(
      `${this.expensesUrl}/${id}`
    );
  }

  createExpense(
    newTransaction: TransactionRequestInterface
  ): Observable<TransactionResponseInterface> {
    return this.http.post<TransactionResponseInterface>(
      this.expensesUrl,
      newTransaction,
      this.config
    );
  }

  updateExpense(
    id: number,
    newData: TransactionRequestInterface
  ): Observable<TransactionRequestInterface> {
    return this.http.put<TransactionRequestInterface>(
      `${this.expensesUrl}/${id}`,
      newData,
      this.config
    );
  }

  deleteIncome(id: number): Observable<TransactionResponseInterface> {
    const url = `${this.expensesUrl}/${id}`;
    return this.http.delete<TransactionResponseInterface>(url);
  }
}

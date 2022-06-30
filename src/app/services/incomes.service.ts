import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TransactionResponseInterface } from '../models/entities/TransactionResponseInterface';
import { Observable } from 'rxjs';
import { TransactionRequestInterface } from '../models/entities/TransactionRequestInterface';

@Injectable({
  providedIn: 'root',
})
export class IncomesService {
  private incomesUrl = 'http://127.0.0.1:8081/api/incomes';
  constructor(private http: HttpClient) {}

  config = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  getIncomes(): Observable<TransactionResponseInterface[]> {
    return this.http.get<TransactionResponseInterface[]>(this.incomesUrl);
  }

  createIncome(
    newTransaction: TransactionRequestInterface
  ): Observable<TransactionResponseInterface> {
    return this.http.post<TransactionResponseInterface>(
      this.incomesUrl,
      newTransaction,
      this.config
    );
  }

  updateIncome(
    id: number,
    newData: TransactionRequestInterface
  ): Observable<TransactionRequestInterface> {
    return this.http.put<TransactionRequestInterface>(
      `${this.incomesUrl}/${id}`,
      newData,
      this.config
    );
  }

  deleteIncome(id: number): Observable<TransactionResponseInterface> {
    const url = `${this.incomesUrl}/${id}`;
    return this.http.delete<TransactionResponseInterface>(url);
  }
}

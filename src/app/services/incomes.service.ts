import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TransactionResponseInterface } from '../models/entities/TransactionResponseInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IncomesService {
  private incomesUrl = 'http://127.0.0.1:8081/api/incomes';
  constructor(private http: HttpClient) {}

  getIncomes(): Observable<TransactionResponseInterface[]> {
    return this.http.get<TransactionResponseInterface[]>(this.incomesUrl);
  }

  deleteIncome(id: number): Observable<TransactionResponseInterface> {
    const url = `${this.incomesUrl}/${id}`;
    return this.http.delete<TransactionResponseInterface>(url);
  }
}

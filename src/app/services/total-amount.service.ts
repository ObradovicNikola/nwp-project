import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TotalAmountInterface } from '../models/dto/TotalAmountInterface';

@Injectable({
  providedIn: 'root',
})
export class TotalAmountService {
  private expensesUrl = 'http://127.0.0.1:8081/api/total-amount';
  constructor(private http: HttpClient) {}

  config = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  getTotalAmmount(): Observable<TotalAmountInterface> {
    return this.http.get<TotalAmountInterface>(this.expensesUrl);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionRequestInterface } from 'src/app/models/entities/TransactionRequestInterface';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.sass'],
})
export class ExpenseDetailsComponent implements OnInit {
  expense: TransactionRequestInterface | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private expensesService: ExpensesService
  ) {}

  ngOnInit(): void {
    this.getExpense();
  }

  getExpense() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.expensesService
      .getExpense(id)
      .subscribe((expense) => (this.expense = expense));
  }
}

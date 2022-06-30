import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionRequestInterface } from 'src/app/models/entities/TransactionRequestInterface';
import { IncomesService } from 'src/app/services/incomes.service';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.sass'],
})
export class IncomeDetailsComponent implements OnInit {
  income: TransactionRequestInterface | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private incomesService: IncomesService
  ) {}

  ngOnInit(): void {
    this.getIncome();
  }

  getIncome() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.incomesService
      .getIncome(id)
      .subscribe((income) => (this.income = income));
  }
}

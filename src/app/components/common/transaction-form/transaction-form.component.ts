import { Component, Input, OnInit } from '@angular/core';
import { TransactionRequestInterface } from 'src/app/models/entities/TransactionRequestInterface';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.sass'],
})
export class TransactionFormComponent implements OnInit {
  @Input() handleDialogClose!: () => void;
  @Input() handleDialogSubmit!: (model: TransactionRequestInterface) => void;

  model: TransactionRequestInterface = {
    description: '',
    amount: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  prepareAndSubmit(transaction: TransactionRequestInterface): void {
    transaction.description = transaction.description?.trim();
    this.handleDialogSubmit(transaction);
  }
}

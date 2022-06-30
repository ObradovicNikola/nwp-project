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

  // optional input for initial data
  @Input() initialData?: TransactionRequestInterface;

  model: TransactionRequestInterface = {
    description: '',
    amount: 0,
  };

  constructor() {}

  ngOnInit(): void {
    if (this.initialData) {
      this.model = { ...this.initialData };
    }
  }

  prepareAndSubmit(): void {
    this.model.description = this.model.description.trim();
    this.handleDialogSubmit(this.model);
  }
}

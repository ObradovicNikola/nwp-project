import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionRequestInterface } from 'src/app/models/entities/TransactionRequestInterface';
import { TransactionResponseInterface } from 'src/app/models/entities/TransactionResponseInterface';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.sass'],
})
export class ExpensesComponent implements OnInit {
  expenses: TransactionResponseInterface[] = [];
  dataSource = new MatTableDataSource<TransactionResponseInterface>(
    this.expenses
  );

  isDialogOpen: boolean = false;

  isEditDialogOpen: boolean = false;
  editedExpenseData: TransactionResponseInterface = {
    id: -1,
    description: '',
    amount: 0,
  };

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {
    this.getExpenses();
  }

  getExpenses(): void {
    this.expensesService.getExpenses().subscribe((expenses) => {
      this.expenses = expenses;
      this.dataSource.data = this.expenses;
    });
  }

  handleEditAction: (expense: TransactionResponseInterface) => void = (
    expense: TransactionResponseInterface
  ) => {
    console.log('Edit expense: ', expense);
    this.editedExpenseData = expense;
    this.openEditDialog();
  };

  handleDeleteAction: (expense: TransactionResponseInterface) => void = (
    expense: TransactionResponseInterface
  ) => {
    this.expensesService.deleteExpense(expense.id).subscribe(() => {
      this.getExpenses();
    });
  };

  // DIALOGS

  // dialog to add new entity
  openDialog: () => void = () => {
    this.isDialogOpen = true;
  };

  closeDialog: () => void = () => {
    this.editedExpenseData.id = -1;
    this.isDialogOpen = false;
  };

  submitDialog: (transaction: TransactionRequestInterface) => void = (
    transaction
  ) => {
    this.expensesService.createExpense(transaction).subscribe({
      next: () => {
        this.getExpenses();
        this.closeDialog();
      },
      error: (error) => {
        console.log(error);
      },
    });
  };

  // dialog to edit an entity with id = this.editedExpenseId
  openEditDialog: () => void = () => {
    this.isEditDialogOpen = true;
  };

  closeEditDialog: () => void = () => {
    this.isEditDialogOpen = false;
  };

  submitEditDialog: (transaction: TransactionRequestInterface) => void = (
    transaction
  ) => {
    this.expensesService
      .updateExpense(this.editedExpenseData.id, transaction)
      .subscribe({
        next: () => {
          this.getExpenses();
          this.closeEditDialog();
        },
        error: (error) => {
          console.log(error);
        },
      });
  };
}

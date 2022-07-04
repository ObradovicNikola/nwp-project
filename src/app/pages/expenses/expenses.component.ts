import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MySnackbarComponent } from 'src/app/components/common/my-snackbar/my-snackbar.component';
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

  constructor(
    private expensesService: ExpensesService,
    private snackBar: MatSnackBar
  ) {}

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
    this.editedExpenseData = expense;
    this.openEditDialog();
  };

  handleDeleteAction: (expense: TransactionResponseInterface) => void = (
    expense: TransactionResponseInterface
  ) => {
    this.expensesService.deleteExpense(expense.id).subscribe(() => {
      this.getExpenses();
      this.snackBar.openFromComponent(MySnackbarComponent, {
        data: {
          message: 'Expense deleted successfully!',
          type: 'is-info',
        },
      });
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
        this.snackBar.openFromComponent(MySnackbarComponent, {
          data: {
            message: 'Expense created successfully!',
            type: 'is-info',
          },
        });
      },
      error: (error) => {
        // TODO: snackbar to show error
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
          this.snackBar.openFromComponent(MySnackbarComponent, {
            data: {
              message: 'Expense updated successfully!',
              type: 'is-info',
            },
          });
        },
        error: (error) => {
          // TODO: snackbar to show error
        },
      });
  };
}

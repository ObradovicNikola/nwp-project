import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionResponseInterface } from 'src/app/models/entities/TransactionResponseInterface';
import { IncomesService } from 'src/app/services/incomes.service';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionRequestInterface } from 'src/app/models/entities/TransactionRequestInterface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MySnackbarComponent } from 'src/app/components/common/my-snackbar/my-snackbar.component';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.sass'],
})
export class IncomesComponent implements OnInit {
  incomes: TransactionResponseInterface[] = [];
  dataSource = new MatTableDataSource<TransactionResponseInterface>(
    this.incomes
  );

  isDialogOpen: boolean = false;

  isEditDialogOpen: boolean = false;
  editedIncomeData: TransactionResponseInterface = {
    id: -1,
    description: '',
    amount: 0,
  };

  constructor(
    private incomesService: IncomesService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getIncomes();
  }

  getIncomes(): void {
    this.incomesService.getIncomes().subscribe((incomes) => {
      this.incomes = incomes;
      this.dataSource.data = this.incomes;
    });
  }

  handleEditAction: (income: TransactionResponseInterface) => void = (
    income: TransactionResponseInterface
  ) => {
    this.editedIncomeData = income;
    this.openEditDialog();
  };

  handleDeleteAction: (income: TransactionResponseInterface) => void = (
    income: TransactionResponseInterface
  ) => {
    this.incomesService.deleteIncome(income.id).subscribe(() => {
      this.getIncomes();
      this.snackBar.openFromComponent(MySnackbarComponent, {
        data: {
          message: 'Income deleted successfully!',
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
    this.editedIncomeData.id = -1;
    this.isDialogOpen = false;
  };

  submitDialog: (transaction: TransactionRequestInterface) => void = (
    transaction
  ) => {
    this.incomesService.createIncome(transaction).subscribe({
      next: () => {
        this.getIncomes();
        this.closeDialog();
        this.snackBar.openFromComponent(MySnackbarComponent, {
          data: {
            message: 'Income created successfully!',
            type: 'is-info',
          },
        });
      },
      error: (error) => {
        // TODO: snackbar to show error
      },
    });
  };

  // dialog to edit an entity with id = this.editedIncomeId
  openEditDialog: () => void = () => {
    this.isEditDialogOpen = true;
  };

  closeEditDialog: () => void = () => {
    this.isEditDialogOpen = false;
  };

  submitEditDialog: (transaction: TransactionRequestInterface) => void = (
    transaction
  ) => {
    this.incomesService
      .updateIncome(this.editedIncomeData.id, transaction)
      .subscribe({
        next: () => {
          this.getIncomes();
          this.closeEditDialog();
          this.snackBar.openFromComponent(MySnackbarComponent, {
            data: {
              message: 'Income updated successfully!',
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

import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionResponseInterface } from 'src/app/models/entities/TransactionResponseInterface';
import { IncomesService } from 'src/app/services/incomes.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { TransactionRequestInterface } from 'src/app/models/entities/TransactionRequestInterface';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.sass'],
})
export class IncomesComponent implements OnInit {
  incomes: TransactionResponseInterface[] = [];
  displayedColumns: string[] = ['id', 'description', 'amount', 'actions'];
  dataSource = new MatTableDataSource<TransactionResponseInterface>(
    this.incomes
  );
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  isDialogOpen: boolean = false;

  isEditDialogOpen: boolean = false;
  // editedIncomeId: number = -1;
  editedIncomeData: TransactionResponseInterface = {
    id: -1,
    description: '',
    amount: 0,
  };

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  constructor(private incomesService: IncomesService) {}

  ngOnInit(): void {
    this.getIncomes();
  }

  getIncomes(): void {
    this.incomesService.getIncomes().subscribe((incomes) => {
      this.incomes = incomes;
      this.dataSource.data = this.incomes;
    });
  }

  handleEditAction(income: TransactionResponseInterface): void {
    console.log('Edit income: ', income);
    this.editedIncomeData = income;
    this.openEditDialog();
  }

  handleDeleteAction(income: TransactionResponseInterface): void {
    this.incomesService.deleteIncome(income.id).subscribe(() => {
      this.getIncomes();
    });
  }

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
      },
      error: (error) => {
        console.log(error);
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
        },
        error: (error) => {
          console.log(error);
        },
      });
  };
}

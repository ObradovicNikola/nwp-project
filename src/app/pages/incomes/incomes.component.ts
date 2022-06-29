import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionResponseInterface } from 'src/app/models/entities/TransactionResponseInterface';
import { IncomesService } from 'src/app/services/incomes.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

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
      console.log(this.incomes);
      this.dataSource.data = this.incomes;
    });
  }

  handleEditAction(income: TransactionResponseInterface): void {
    console.log('Edit income: ', income);
  }

  handleDeleteAction(income: TransactionResponseInterface): void {
    console.log('Delete income: ', income);
  }
}

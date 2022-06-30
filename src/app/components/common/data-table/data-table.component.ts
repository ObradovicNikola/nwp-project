import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { TransactionResponseInterface } from 'src/app/models/entities/TransactionResponseInterface';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.sass'],
})
export class DataTableComponent implements OnInit {
  @Input() dataSource!: MatTableDataSource<TransactionResponseInterface>;
  @Input() handleEditAction!: (income: TransactionResponseInterface) => void;
  @Input() handleDeleteAction!: (income: TransactionResponseInterface) => void;
  @Input() transactionType: 'expenses' | 'incomes' = 'expenses';

  displayedColumns: string[] = ['id', 'description', 'amount', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor() {}

  ngOnInit(): void {}
}

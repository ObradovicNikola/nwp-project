import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ChartComponent } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: any[];
};

@Component({
  selector: 'app-total-pie-chart',
  templateUrl: './total-pie-chart.component.html',
  styleUrls: ['./total-pie-chart.component.sass'],
})
export class TotalPieChartComponent implements OnInit {
  @Input() totalExpenses: number = 0;
  @Input() totalIncomes: number = 0;

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: ChartOptions;
  constructor() {
    this.chartOptions = {
      series: [this.totalExpenses, this.totalIncomes],
      chart: {
        width: 380,
        type: 'pie',
        foreColor: '#fff',
      },
      colors: ['#f44336', '#66bb6a'],

      labels: ['Expenses', 'Incomes'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'top',
            },
          },
        },
      ],
    };
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.chartOptions.series = [this.totalExpenses, this.totalIncomes];
  }
}

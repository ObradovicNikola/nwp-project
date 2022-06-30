import { Component, OnInit } from '@angular/core';
import { TotalAmountInterface } from 'src/app/models/dto/TotalAmountInterface';
import { TotalAmountService } from 'src/app/services/total-amount.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  totalAmount: TotalAmountInterface | undefined = undefined;

  constructor(private totalAmountService: TotalAmountService) {}

  ngOnInit(): void {
    this.getTotalAmmount();
  }

  getTotalAmmount() {
    this.totalAmountService.getTotalAmmount().subscribe((totalAmount) => {
      this.totalAmount = totalAmount;
      console.log(this.totalAmount);
    });
  }
}

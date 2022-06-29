import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.sass'],
})
export class TransactionFormComponent implements OnInit {
  @Input() handleDialogClose!: () => void;
  @Input() handleDialogSubmit!: () => void;

  constructor() {}

  ngOnInit(): void {}
}

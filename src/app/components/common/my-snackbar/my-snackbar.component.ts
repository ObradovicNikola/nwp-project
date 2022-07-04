import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-my-snackbar',
  templateUrl: './my-snackbar.component.html',
  styleUrls: ['./my-snackbar.component.sass'],
})
export class MySnackbarComponent implements OnInit {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA)
    public data: { message: string; type: 'is-info' | 'is-danger' }
  ) {
    console.log(this.data);
  }

  ngOnInit(): void {}
}

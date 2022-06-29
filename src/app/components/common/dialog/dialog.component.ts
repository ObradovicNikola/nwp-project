import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass'],
})
export class DialogComponent implements OnInit {
  @Input() handleDialogClose!: () => void;

  @Input() title: string = 'Dialog';

  constructor() {}

  ngOnInit(): void {}

  stopPropagation(e: Event): void {
    e.stopPropagation();
  }
}

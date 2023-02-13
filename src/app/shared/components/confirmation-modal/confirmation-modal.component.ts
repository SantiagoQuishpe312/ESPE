import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'vex-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
  title: string;
  content: string;
  confirmLabel: string;
  cancelLabel: string;
  confirmationColor: ThemePalette;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ConfirmationModalComponent>
  ) {}

  ngOnInit(): void {
    this.content = this.data['content'] || '';
    this.title = this.data['title'] || 'Alerta';
    this.confirmLabel = this.data['confirmLabel'] || 'Aceptar';
    this.cancelLabel = this.data['cancelLabel'] || 'Cancelar';
    this.confirmationColor = this.data['confirmationColor'] || 'warn';
  }

  close(answer: string) {
    if (answer === 'no') {
      this.dialogRef.close(false);
    } else {
      this.dialogRef.close(true);
    }
  }
}

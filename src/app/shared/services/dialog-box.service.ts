import { Injectable, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { DialogComponent } from '@shared/components';
import { take, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DialogBoxService {

  // dialogRef: MatDialogRef<DialogComponent>;

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<DialogComponent> ) { }

  public show(options: any, message?: string) {
    this.dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: options.title,
        message,
        cancelText: options.cancelText,
        confirmText: options.confirmText
      }
    });
  }

  public confirmed(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(take(1), map(res => {
      return res;
    }
    ));
  }

  options(): any {
    return {
      title: 'Are you sure you want to complete this action?',
      message: '',
      cancelText: 'Not anymore',
      confirmText: 'Yes Proceed'
    };
  }
}

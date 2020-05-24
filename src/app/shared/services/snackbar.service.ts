import { Injectable } from '@angular/core';
import {  MatSnackBar } from '@angular/material';



@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackbar: MatSnackBar) { }

  public show(message: string, action = 'Close', timeOut?: number) {
    const duration = (timeOut ? timeOut : 5) * 1000;
    this.snackbar.open(message, action, { duration });
  }

}

import { Directive, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Directive({
  selector: '[cossaiSlsSnackbar]'
})
export class SnackbarDirective {

  constructor(private snackBar: MatSnackBar) { }

  // @HostListener('click', []) onClick($event) {
  //   this.snackBar.open(message, action, {
  //     duration: 2000,
  //   });
  // }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}

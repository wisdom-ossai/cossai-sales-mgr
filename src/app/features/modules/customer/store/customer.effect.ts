import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class CustomerEffect {
  constructor(private actions$: Actions) { }
}

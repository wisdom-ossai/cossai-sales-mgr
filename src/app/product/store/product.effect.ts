import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class ProductEffect {
  constructor(private actions$: Actions) { }
}

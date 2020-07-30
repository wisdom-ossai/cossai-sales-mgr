import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductCreatorService } from './product-creator.service';
import { Router } from '@angular/router';
import { FormErrorStateMatcher } from '@shared/classes/form-error-state-matcher';
import {
  getSaveStatus,
  isProcessingProduct,
  SaveDataProductSuccess,
  CreateDataProduct,
  getCategoriesProduct,
  LoadCategoriesProduct
} from '../store';
import { Observable, pipe } from 'rxjs';
import { ICategory } from 'src/app/interfaces';
import { Store } from '@ngrx/store';
import { IAppState } from '@core/store/app.state';

@Component({
  selector: 'cossai-sls-product-creator',
  templateUrl: './product-creator.component.html',
  styleUrls: ['./product-creator.component.scss']
})
export class ProductCreatorComponent implements OnInit {

  matcher = new FormErrorStateMatcher();
  isSaved$: Observable<boolean>;
  isProcessing$: Observable<boolean>;
  categories$: Observable<ICategory[]>;

  @ViewChild('fileUploadQueue', {static: false}) fileUploadQueue: ElementRef;

  categories = [
    {
      label: 'Category 1',
      value: 'category_1'
    },
    {
      label: 'Category 2',
      value: 'category_2'
    }
  ];

  constructor(private router: Router, private store: Store<IAppState>, public fs: ProductCreatorService) { }

  ngOnInit() {
    this.storeSelects();
    this.storeDispatches();
  }

  storeSelects() {
    this.isSaved$ = this.store.select(pipe(getSaveStatus));
    this.isProcessing$ = this.store.select(pipe(isProcessingProduct));
    this.categories$ = this.store.select(pipe(getCategoriesProduct));
  }

  storeDispatches() {
    this.store.dispatch(new LoadCategoriesProduct());
  }

  onSubmit() {
    if (this.fs.form.valid) {
      this.store.dispatch(new CreateDataProduct(this.fs.form.value, false));

      this.isSaved$.subscribe(status => {
        if (status) {
          this.router.navigate(['f/products']);
          this.fs.initializeForm();
          this.store.dispatch(new SaveDataProductSuccess(false));
        }
      });
    }
  }
  onReset() {

  }

  onCancelClick() {
    this.router.navigate(['f/products']);
  }
}

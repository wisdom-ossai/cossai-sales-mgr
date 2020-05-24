import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryCreatorService } from './category-creator.service';
import { Router } from '@angular/router';
import { FormErrorStateMatcher } from '@shared/classes/form-error-state-matcher';
import { CreateDataCategory, getSaveCategoryStatus, isProcessingCategory, SaveDataCategorySuccess } from '../store';
import { pipe, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '@core/store/app.state';

@Component({
  selector: 'cossai-sls-category-creator',
  templateUrl: './category-creator.component.html',
  styleUrls: ['./category-creator.component.scss'],
  providers: [CategoryCreatorService]
})
export class CategoryCreatorComponent implements OnInit, OnDestroy {

  matcher = new FormErrorStateMatcher();
  isSaved$: Observable<boolean>;
  isProcessing$: Observable<boolean>;

  products = [
    {
      label: 'Product 1',
      value: 'p_1'
    },
    {
      label: 'Product 2',
      value: 'p_2'
    }
  ];


  constructor(
    private router: Router,
    private store: Store<IAppState>, public fs: CategoryCreatorService) { }

  ngOnInit() {
    this.storeSelects();
  }

  storeSelects() {
    this.isSaved$ = this.store.select(pipe(getSaveCategoryStatus));
    this.isProcessing$ = this.store.select(pipe(isProcessingCategory));
  }

  onSubmit() {
    if (this.fs.form.valid) {
      this.store.dispatch(new CreateDataCategory(this.fs.form.value, false));

      this.isSaved$.subscribe(status => {
        if (status) {
          this.router.navigate(['f/categories']);
          this.fs.initializeForm();
          this.store.dispatch(new SaveDataCategorySuccess(false));
        }
      });
    }
  }
  onReset() {

  }

  onCancelClick() {
    this.router.navigate(['f/categories']);
  }

  ngOnDestroy() {

  }
}

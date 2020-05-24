import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryEditorService } from './category-editor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormErrorStateMatcher } from '@shared/classes/form-error-state-matcher';
import { pipe, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '@core/store/app.state';
import {
  getSaveCategoryStatus,
  isProcessingCategory,
  getSingleCategoryData,
  LoadSingleDataCategory,
  UpdateDataCategory,
  SaveDataCategorySuccess
} from '../store';
import { ICategory } from 'src/app/interfaces';
import { Ng7DynamicBreadcrumbService } from 'ng7-dynamic-breadcrumb';

@Component({
  selector: 'cossai-sls-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.scss'],
  providers: [CategoryEditorService]
})
export class CategoryEditorComponent implements OnInit, OnDestroy {


  matcher = new FormErrorStateMatcher();
  isSaved$: Observable<boolean>;
  isProcessing$: Observable<boolean>;
  category$: Observable<ICategory>;
  categoryId: string;

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
    private route: ActivatedRoute,
    public fs: CategoryEditorService,
    private store: Store<IAppState>,
    private ng7DynamicBreadcrumbService: Ng7DynamicBreadcrumbService) {

     }

  ngOnInit() {
    this.assignScheduleId();
    this.storeDispatches();
    this.storeSelects();
    this.patchDataToForm();
    this.loadBreadcrumb();
  }

  storeSelects() {
    this.isSaved$ = this.store.select(pipe(getSaveCategoryStatus));
    this.isProcessing$ = this.store.select(pipe(isProcessingCategory));
    this.category$ = this.store.select(pipe(getSingleCategoryData));
  }

  storeDispatches() {
    this.store.dispatch(new LoadSingleDataCategory({ categoryId: this.categoryId }));
  }

  assignScheduleId() {
    this.route.params.subscribe(v => {
      this.categoryId = v.id;
    });
  }

  loadBreadcrumb() {
    const breadcrumb = { name: 'This is Custom Text' };
    this.ng7DynamicBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
  }
  onSubmit() {
    if (this.fs.form.valid) {
      this.store.dispatch(new UpdateDataCategory(this.fs.form.value, this.categoryId));

      this.isSaved$.pipe().subscribe(status => {
        if (status) {
          this.router.navigate(['f/categories']);
          this.fs.initializeForm();
          this.store.dispatch(new SaveDataCategorySuccess(false));
        }
      });
    }
  }
  onReset() {
    this.patchDataToForm();
  }

  patchDataToForm() {
    this.category$.subscribe(category => {
      if (category) {
        this.fs.patchForm(category);
      }
    });
  }

  onCancelClick() {
    this.router.navigate(['f/categories']);
  }

  ngOnDestroy() {

  }
}

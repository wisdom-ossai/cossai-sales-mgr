import { Component, OnInit } from '@angular/core';
import { ProductEditorService } from './product-editor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormErrorStateMatcher } from '@shared/classes/form-error-state-matcher';
import {
  getSaveStatus,
  isProcessingProduct,
  UpdateDataProduct,
  SaveDataProductSuccess,
  LoadSingleProductData,
  getSingleProductData,
  LoadCategoriesProduct,
  getCategoriesProduct
} from '../store';
import { IAppState } from '@core/store/app.state';
import { Store, select } from '@ngrx/store';
import { Observable, pipe } from 'rxjs';
import { IProduct, ICategory } from 'src/app/interfaces';
import { Ng7DynamicBreadcrumbService } from 'ng7-dynamic-breadcrumb';

@Component({
  selector: 'cossai-sls-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss']
})
export class ProductEditorComponent implements OnInit {


  matcher = new FormErrorStateMatcher();
  isSaved$: Observable<boolean>;
  isProcessing$: Observable<boolean>;
  product$: Observable<IProduct>;
  categories$: Observable<ICategory[]>;
  productID: string;

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

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<IAppState>,
              private ng7DynamicBreadcrumbService: Ng7DynamicBreadcrumbService,
              public fs: ProductEditorService) {
    this.assignScheduleId();
   }

  ngOnInit() {
    this.storeSelects();
    this.storeDispatches();
    this.patchDataToForm();
    this.loadBreadcrumb();
  }

  storeSelects() {
    this.isSaved$ = this.store.select(pipe(getSaveStatus));
    this.isProcessing$ = this.store.select(pipe(isProcessingProduct));
    this.product$ = this.store.pipe(select(getSingleProductData));
    this.categories$ = this.store.select(pipe(getCategoriesProduct));
  }

  storeDispatches() {
    this.store.dispatch(new LoadSingleProductData({ productID: this.productID }));
    this.store.dispatch(new LoadCategoriesProduct());
  }

  assignScheduleId() {
    this.route.params.subscribe(v => {
      this.productID = v.id;
    });
  }

  loadBreadcrumb() {
    const breadcrumb = { name: 'This is Custom Text' };
    this.ng7DynamicBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
  }
  onSubmit() {
    if (this.fs.form.valid) {
      this.store.dispatch(new UpdateDataProduct(this.fs.form.value, this.productID));

      this.isSaved$.pipe().subscribe(status => {
        if (status) {
          this.router.navigate(['f/products']);
          this.fs.initializeForm();
          this.store.dispatch(new SaveDataProductSuccess(false));
        }
      });
    }
  }
  onReset() {
    this.patchDataToForm();
  }

  patchDataToForm() {
    this.product$.subscribe(product => {
      if (product) {
        this.fs.patchForm(product);
      }
    });
  }

  onCancelClick() {
    this.router.navigate(['f/products']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductEditorService } from './product-editor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormErrorStateMatcher } from '@shared/classes/form-error-state-matcher';
import { SaveDataProduct, getSaveStatus, isProcessingProduct } from '../store';
import { IAppState } from '@core/store/app.state';
import { Store } from '@ngrx/store';
import { Observable, pipe } from 'rxjs';
import { IProduct } from 'src/app/interfaces';

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

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<IAppState>, public fs: ProductEditorService) {
    this.assignScheduleId();
   }

  ngOnInit() {
    this.storeSelects();
  }

  storeSelects() {
    this.isSaved$ = this.store.select(pipe(getSaveStatus));
    this.isProcessing$ = this.store.select(pipe(isProcessingProduct));
  }

  assignScheduleId() {
    this.route.params.subscribe(v => {
      this.productID = v.id;
    });
  }

  onSubmit() {
    if (this.fs.form.valid) {
      console.log(this.fs.form.value);
      this.store.dispatch(new SaveDataProduct(this.fs.form.value, true, this.productID));

      this.isSaved$.pipe().subscribe(status => {
        if (status) {
          this.router.navigate(['f/products']);
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

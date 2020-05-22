import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces';
import { Observable, pipe } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getSingleProductData, LoadSingleProductDataSuccess, LoadSingleProductData } from '../store';
import { Router, ActivatedRoute } from '@angular/router';
import { IAppState } from '@core/store/app.state';

@Component({
  selector: 'cossai-sls-product-viewer',
  templateUrl: './product-viewer.component.html',
  styleUrls: ['./product-viewer.component.scss']
})
export class ProductViewerComponent implements OnInit {

  product$: Observable<IProduct>;

  constructor(private router: Router,
              private store: Store<IAppState>,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.storeSelects();
  }

  storeSelects() {
    this.product$ = this.store.select(pipe(getSingleProductData));
  }

  onEditButtonClicked() {
    this.product$.subscribe(val => {
      if (val) {
        this.store.dispatch(new LoadSingleProductDataSuccess(val));
        this.router.navigate([`f/products/edit/${val._id}`]);
      }
    });
  }

  onRefreshClicked() {
    this.store.dispatch(new LoadSingleProductData({ productID: this.route.snapshot.params.id }));
  }
  onCancelClick() {
    this.router.navigate(['f/products']);
  }
}

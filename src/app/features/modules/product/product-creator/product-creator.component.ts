import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductCreatorService } from './product-creator.service';
import { Router } from '@angular/router';
import { FormErrorStateMatcher } from '@shared/classes/form-error-state-matcher';

@Component({
  selector: 'cossai-sls-product-creator',
  templateUrl: './product-creator.component.html',
  styleUrls: ['./product-creator.component.scss']
})
export class ProductCreatorComponent implements OnInit {

  matcher = new FormErrorStateMatcher();

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

  constructor(private router: Router, public fs: ProductCreatorService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.fs.form.valid) {
      console.log(this.fs.form.value);
    }
  }
  onReset() {

  }

  onCancelClick() {
    this.router.navigate(['f/products']);
  }
}

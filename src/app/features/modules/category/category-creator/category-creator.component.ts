import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryCreatorService } from './category-creator.service';
import { Router } from '@angular/router';
import { FormErrorStateMatcher } from '@shared/classes/form-error-state-matcher';

@Component({
  selector: 'cossai-sls-category-creator',
  templateUrl: './category-creator.component.html',
  styleUrls: ['./category-creator.component.scss'],
  providers: [CategoryCreatorService]
})
export class CategoryCreatorComponent implements OnInit, OnDestroy {

  matcher = new FormErrorStateMatcher();

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


  constructor(private router: Router, public fs: CategoryCreatorService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.fs.form.valid) {
      console.log(this.fs.form.value);
    }
  }
  onReset() {
    this.fs.restartForm();
  }

  onCancelClick() {
    this.router.navigate(['f/categories']);
  }

  ngOnDestroy() {
    this.fs.restartForm();
  }
}

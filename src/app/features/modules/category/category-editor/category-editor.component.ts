import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryEditorService } from './category-editor.service';
import { Router } from '@angular/router';
import { FormErrorStateMatcher } from '@shared/classes/form-error-state-matcher';

@Component({
  selector: 'cossai-sls-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.scss'],
  providers: [CategoryEditorService]
})
export class CategoryEditorComponent implements OnInit, OnDestroy {


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

  constructor(private router: Router, public fs: CategoryEditorService) { }

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

import { Component, OnInit } from '@angular/core';
import { CategoryCreatorService } from './category-creator.service';
import { Router } from '@angular/router';
import { FormErrorStateMatcher } from '@shared/classes/form-error-state-matcher';

@Component({
  selector: 'cossai-sls-category-creator',
  templateUrl: './category-creator.component.html',
  styleUrls: ['./category-creator.component.scss'],
  providers: [CategoryCreatorService]
})
export class CategoryCreatorComponent implements OnInit {

  matcher = new FormErrorStateMatcher();

  genders = [
    {
      label: 'Male',
      value: 'male'
    },
    {
      label: 'Female',
      value: 'female'
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

  }

  onCancelClick() {
    this.router.navigate(['/categories']);
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserCreatorService } from './user-creator.service';
import { FormErrorStateMatcher } from '@shared/classes/form-error-state-matcher';
import { Router } from '@angular/router';

@Component({
  selector: 'cossai-sls-user-creator',
  templateUrl: './user-creator.component.html',
  styleUrls: ['./user-creator.component.scss']
})
export class UserCreatorComponent implements OnInit, OnDestroy {

  constructor(private router: Router, public fs: UserCreatorService) { }

  matcher = new FormErrorStateMatcher();

  roles = [
    {
      label: 'Owner',
      value: 'owner'
    },
    {
      label: 'Customer Manager Only',
      value: 'cmo'
    },
    {
      label: 'Product Manager Only',
      value: 'pmo'
    },
    {
      label: 'Product and Customer Manager',
      value: 'pcm'
    },
    {
      label: 'Employee Manager',
      value: 'em'
    },
    {
      label: 'Procurement',
      value: 'procurement'
    }
  ];


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
    this.router.navigate(['f/users']);
  }

  ngOnDestroy() {
    this.fs.restartForm();
  }
}

import { Component, OnInit } from '@angular/core';
import { UserEditorService } from './user-editor.service';
import { FormErrorStateMatcher } from '@shared/classes/form-error-state-matcher';
import { Router } from '@angular/router';

@Component({
  selector: 'cossai-sls-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

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


  constructor(private router: Router, public fs: UserEditorService) { }

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
    this.router.navigate(['/user']);
  }
}

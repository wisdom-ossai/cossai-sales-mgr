import { Component, OnInit } from '@angular/core';
import { UserEditorService } from './user-editor.service';
import { FormErrorStateMatcher } from 'src/app/shared/classes/form-error-state-matcher';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

  matcher = new FormErrorStateMatcher();

  constructor(public fs: UserEditorService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.fs.form.valid) {
      console.log(this.fs.form.value);
    }
  }
  onReset() {

  }
}

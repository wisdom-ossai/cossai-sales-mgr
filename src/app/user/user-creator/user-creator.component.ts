import { Component, OnInit } from '@angular/core';
import { UserCreatorService } from './user-creator.service';
import { FormErrorStateMatcher } from 'src/app/shared/classes/form-error-state-matcher';

@Component({
  selector: 'app-user-creator',
  templateUrl: './user-creator.component.html',
  styleUrls: ['./user-creator.component.scss']
})
export class UserCreatorComponent implements OnInit {

  matcher = new FormErrorStateMatcher();

  constructor(public fs: UserCreatorService) { }

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

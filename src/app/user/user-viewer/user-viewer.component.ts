import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cossai-sls-user-viewer',
  templateUrl: './user-viewer.component.html',
  styleUrls: ['./user-viewer.component.scss']
})
export class UserViewerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onEditButtonClicked() {

  }
  onCancelClick() {
    this.router.navigate(['/user']);
  }
  onActivityButtonClicked() {
    this.router.navigate(['/user/activities']);
  }
}

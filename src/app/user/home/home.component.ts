import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAddButtonClicked() {
    this.router.navigate(['/user/new']);
  }

  onEditIconClicked(event) {
    console.log(event);
    this.router.navigate(['/user/edit/chuks']);
  }

  getSelectedItemList(event) {
    console.log(event);
  }
}

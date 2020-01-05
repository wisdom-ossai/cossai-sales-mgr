import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-row',
  templateUrl: './button-row.component.html',
  styleUrls: ['./button-row.component.scss']
})
export class ButtonRowComponent implements OnInit {

  @Output() addButtonClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddButtonClicked($event) {
    this.addButtonClick.emit();
  }

}

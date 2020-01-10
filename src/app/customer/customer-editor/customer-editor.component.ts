import { Component, OnInit } from '@angular/core';
import { CustomerEditorService } from './customer-editor.service';

@Component({
  selector: 'cossai-sls-customer-editor',
  templateUrl: './customer-editor.component.html',
  styleUrls: ['./customer-editor.component.scss'],
  providers: [CustomerEditorService]
})
export class CustomerEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

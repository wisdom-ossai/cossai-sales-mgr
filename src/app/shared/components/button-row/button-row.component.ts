import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'cossai-sls-button-row',
  templateUrl: './button-row.component.html',
  styleUrls: ['./button-row.component.scss']
})
export class ButtonRowComponent implements OnInit {

  @Output() addButtonClick: EventEmitter<any> = new EventEmitter();
  @Output() editButtonClick: EventEmitter<any> = new EventEmitter();
  @Output() logButtonClick: EventEmitter<any> = new EventEmitter();
  @Output() disableButtonClick: EventEmitter<any> = new EventEmitter();
  @Output() enableButtonClick: EventEmitter<any> = new EventEmitter();
  @Output() activityButtonClick: EventEmitter<any> = new EventEmitter();
  @Output() removeButtonClick: EventEmitter<any> = new EventEmitter();
  @Output() deleteButtonClick: EventEmitter<any> = new EventEmitter();
  @Output() importButtonClick: EventEmitter<any> = new EventEmitter();
  @Output() exportButtonClick: EventEmitter<any> = new EventEmitter();
  @Output() refreshButtonClick: EventEmitter<any> = new EventEmitter();

  @Input() showAdd: boolean;
  @Input() showEdit: boolean;
  @Input() showLog: boolean;
  @Input() showDisable: boolean;
  @Input() showEnable: boolean;
  @Input() showImport: boolean;
  @Input() showExport: boolean;
  @Input() showRemove: boolean;
  @Input() showDelete: boolean;
  @Input() showActivity: boolean;

  @Input() disableAdd = false;
  @Input() disableEdit = false;
  @Input() disableLog = false;
  @Input() disableDisable = false;
  @Input() disableEnable = false;
  @Input() disableImport = false;
  @Input() disableExport = false;
  @Input() disableRemove = false;
  @Input() disableDelete = false;
  @Input() disableActivity = false;

  @Input() excelJson: any;
  @Input() excelFileName: any;

  constructor() { }

  ngOnInit() {
  }

  onAddButtonClicked($event) {
    this.addButtonClick.emit();
  }

  onEditButtonClicked() {
    this.editButtonClick.emit();
  }

  onActivityButtonClicked() {
    this.activityButtonClick.emit();
  }

  onRefreshButtonClicked() {
    this.refreshButtonClick.emit();
  }

  onEnableButtonClicked() {
    this.enableButtonClick.emit();
  }
  onDisableButtonClicked() {
    this.disableButtonClick.emit();
  }

  onRemoveButtonClicked() {
    this.removeButtonClick.emit();
  }

  onDeleteButtonClicked() {
    this.deleteButtonClick.emit();
  }

  onLogButtonClicked() {
    this.logButtonClick.emit();
  }

  onImportButtonClicked() {
    this.importButtonClick.emit();
  }
}

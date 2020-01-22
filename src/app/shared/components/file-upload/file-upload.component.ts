import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient, HttpRequest, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { map, tap, last, catchError } from 'rxjs/operators';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { IFileUpload } from 'src/app/interfaces';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'cossai-sls-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 100 })),
      transition('* => void', [
        animate(300, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class FileUploadComponent implements OnInit {

  @Input() text = 'Upload';
  @Input() param = 'file';
  @Input() shouldRout = false;
  @Input() routeLink = '';
  @Input() target = '';
  @Input() fileType = 'image/*';

  @Output() complet: EventEmitter<string> = new EventEmitter();

   files: Array<IFileUpload> = [];

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  onClick() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.onchange = () => {
      for (const file of fileUpload.files) {
        this.files.push({
          data: file, state: 'in',
          inProgress: false, progress: 0, canRetry: false, canCancel: true
        });
      }
      this.uploadFiles();
    };
    fileUpload.click();
  }

  cancelFile(file: IFileUpload) {
    file.sub.unsubscribe();
    this.removeFileFromArray(file);
  }

  retryFile(file: IFileUpload) {
    this.uploadFile(file);
    file.canRetry = false;
  }

  private uploadFile(file: IFileUpload) {
    const fd = new FormData();
    fd.append(this.param, file.data);

    const req = new HttpRequest('POST', this.target, fd, {
      reportProgress: true
    });

    file.inProgress = true;
    file.sub = this.http.request(req).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      tap(message => { }),
      last(),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        file.canRetry = true;
        if (error) {
          this.openSnackBar('Something went wrong. Failed to upload file', 'Dismiss');
        }
        return of(`${file.data.name} upload failed.`);
      })
    ).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {
          this.removeFileFromArray(file);
          this.complet.emit(event.body);
          console.log(event);
          if (event.body.success) {
            this.openSnackBar('File uploaded successfully', 'Dismiss');
          }
        }
      }
    );
  }

  private uploadFiles() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.value = '';

    this.files.forEach(file => {
      this.uploadFile(file);
    });
  }

  private removeFileFromArray(file: IFileUpload) {
    const index = this.files.indexOf(file);
    if (index > -1) {
      this.files.splice(index, 1);
    }
  }
}

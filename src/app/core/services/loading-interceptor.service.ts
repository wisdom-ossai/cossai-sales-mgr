import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptorService implements HttpInterceptor {

  activeRequests = 0;

  constructor(
    private service: LoadingService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.activeRequests === 0) {
      this.service.startLoading();
    }

    this.activeRequests++;

    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.service.stopLoading();
        }
      })
    );
  }
}

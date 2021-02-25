import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from '@angular/cdk/portal';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { SpinnerService } from "./spinner.service";
// import { SpinnerOverlayComponent } from '@app/core/spinner-overlay/spinner-overlay.component';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor{
  
  constructor(public spinnerService: SpinnerService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.show();
        return next.handle(req).pipe(
            finalize(() => this.spinnerService.hide())
        );
    }
}

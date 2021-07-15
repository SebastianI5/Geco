
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { BusService, LOADED, LOADING } from "./bus.service";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor{

  constructor(public bus: BusService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.bus.publish(LOADING)
        return next.handle(req).pipe(
            finalize(() => this.bus.publish(LOADED))
        );
    }
}

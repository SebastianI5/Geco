import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ErrorsService } from 'src/app/errors.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor(private error_service: ErrorsService){}

    intercept(req: HttpRequest<any>, next: HttpHandler)
        :Observable<HttpEvent<any>> {                 
            next.handle(req).subscribe( next => (next), err => this.error_service.openSnackBar(err.error.message, "OK"));
            return next.handle(req);

        };
}

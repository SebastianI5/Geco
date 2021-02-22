import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError  } from "rxjs";
import { catchError  } from "rxjs/operators";
import { ErrorsService } from 'src/app/errors.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor(private error_service: ErrorsService){}

    intercept(req: HttpRequest<any>, next: HttpHandler)
        :Observable<HttpEvent<any>> {
            return next.handle(req)
              .pipe(
                catchError( (err) => {
                  this.error_service.openSnackBar(err.error.message, "OK");
                  return throwError(err);
                } )
               );

        }
}

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError  } from "rxjs/operators";
import { BusService, ERROR, SERVER_ERROR } from "./bus.service";

@Injectable()
export class ErrorHttpInterceptor implements HttpInterceptor {

    constructor(private bus: BusService){}

    intercept(req: HttpRequest<any>, next: HttpHandler)
        :Observable<HttpEvent<any>> {

          if(req.headers.get('x-handle-error') == 'true') {
            return next.handle(req);
          }
            return next.handle(req)
              .pipe(
                catchError( (err) => {
                  console.log(err);
                  if(err.status == 504 || err.status == 0 ){
                    this.bus.publish(SERVER_ERROR, Object.assign({}, err , {server_down : true }));
                   } else {
                    this.bus.publish(ERROR, err)
                  }
                  return of(undefined);
                } )
               );

        }
}

import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";

export class Interceptor implements HttpInterceptor {    
    intercept(req: HttpRequest<any>, next: HttpHandler)
        :Observable<HttpEvent<any>> {                 
            //next.handle(req).subscribe( next => (next), err => console.log("pipo: " + JSON.stringify(err.error.message)));
            //return next.handle(req);

            // return next.handle(req).pipe(
            //   map((event: HttpEvent<any>) => {
            //       if (event instanceof HttpResponse) {
            //           console.log('event--->>>', event);
            //           // this.errorDialogService.openDialog(event);
            //       }
            //       return event;
            //   }),
              return next.handle(req)
                    .subscribe(next => {this.handler_valid()}, err => {this.handler_not_valid(er)});
        };
    
    private handler_valid(){
      console.log("valid")
    }

    private handler_not_valid(){
      console.log("error")
    }
}

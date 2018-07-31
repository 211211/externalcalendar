import { Injectable } from "@angular/core";
import
{
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HttpResponse
} from "@angular/common/http";

import { Router } from "@angular/router";

//import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/retry';

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor
{


    constructor(public  router: Router) { }

    /**
     * Intercept all HTTP request to add JWT token to Headers
     * @param {HttpRequest<any>} request
     * @param {HttpHandler} next
     * @returns {Observable<HttpEvent<any>>}
     * @memberof ApiHttpInterceptor
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {

        let body = new URLSearchParams();
        if (request.body)
        {
            var form = JSON.parse(request.body);

            if (form)
            {
                for (let i in form)
                {
                    body.set(i, form[i]);
                }
            }
        }

        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${localStorage.getItem("session")}`,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: body.toString()
        });



        return next.handle(request)
            .catch((err: HttpErrorResponse) =>
            {

                if (err.error instanceof Error)
                {
                    // A client-side or network error occurred. Handle it accordingly.
                  //  console.error('An error occurred:', err.error.message);
                } else
                {
                    // The backend returned an unsuccessful response code.
                    // The response body may contain clues as to what went wrong,
                   // console.error(`Backend returned code ${err.status}, body was: ${err.error}`);

                    //console.log(err);

                    if (err.status == 401) {
                       // this.router.navigate(["auth/login"]);
                    }

                }

                // ...optionally return a default fallback value so app can continue (pick one)
                // which could be a default value

                return Observable.of(new HttpResponse({
                    body: [
                        { name: "Default values returned by Interceptor", id: 88 },
                        { name: "Default values returned by Interceptor(2)", id: 89 }
                    ]
                }));
                // or simply an empty observable
                // return Observable.empty<HttpEvent<any>>();
            })
            ;
    }

  
}





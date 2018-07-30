import { Injectable } from "@angular/core";
import
{
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from "@angular/common/http";

//import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor
{


    constructor() { }

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

        return next.handle(request);
    }


}


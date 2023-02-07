import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private service: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.service.getToken()}`,
      })
    });

    console.log('Intercepted HTTP call', authReq);

    return next.handle(authReq);
  }

  // intercept(req: any, next: any) {
  //   let tokenizedReq = req.clone({
  //     setHeaders: {
  //       Authorization: 'Bearer xx.yy.zz'
  //     }
  //   })
  //   return next.handle(tokenizedReq)
  // }
}

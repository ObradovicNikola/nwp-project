import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const token = localStorage.getItem('token');
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuaWtAZ21haWwuY29tIiwiaWF0IjoxNjU2NDg3MzQzLCJleHAiOjE2ODY0ODczNDN9.6drvECJF0N4Q95qE28K-NIuvqcBaLLqfviWA9M4GHFo';
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token),
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}

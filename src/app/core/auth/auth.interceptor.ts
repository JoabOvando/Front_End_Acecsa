// src/app/core/auth/auth.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionStorageService } from '../../session-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private sessionStorageService: SessionStorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Añadir el token JWT a la cabecera de la solicitud si el usuario está autenticado
    const currentUser = this.sessionStorageService.getItem('currentUser');
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }
    return next.handle(request);
  }
}

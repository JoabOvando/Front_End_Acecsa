// src/app/core/auth/auth.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SessionStorageService } from '../../session-storage.service';// Asegúrate de tener la ruta correcta

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'https://localhost:44369/api/Login';

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object,
    private sessionStorageService: SessionStorageService // Inyecta el servicio
  ) {
    this.initializeCurrentUser();
  }

  private initializeCurrentUser() {
    const storedUser = this.sessionStorageService.getItem('currentUser') ?? '{}';
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/login`, { iD_Usuario: username, password })
      .pipe(
        tap(user => {

          this.sessionStorageService.setItem('currentUser', user);
          console.log(this.sessionStorageService.getItem('currentUser')); // Verifica que el usuario se guarde correctamente
        })
      );
  }

  logout() {
    this.sessionStorageService.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}

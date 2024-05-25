// src/app/core/auth/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { SessionStorageService } from '../../session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router,private sessionStorageService: SessionStorageService ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.sessionStorageService.getItem('currentUser') != null) {
      // Si el usuario está autenticado, permite el acceso
      console.log(this.sessionStorageService.getItem('currentUser'));
      return true;
    }
    // Si no está autenticado, redirige al login
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}

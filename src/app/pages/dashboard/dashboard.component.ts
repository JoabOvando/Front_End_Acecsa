// src/app/pages/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
    //console.log(localStorage.getItem('currentUser'))
  }
}

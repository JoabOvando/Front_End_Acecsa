import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionStorageService } from '../../session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private apiUrl = 'https://localhost:44369/api/Rols';

  constructor(
    private http: HttpClient,
    private sessionStorageService: SessionStorageService
  ) {}

  private getAuthHeaders(): HttpHeaders {
    const currentUser = this.sessionStorageService.getItem('currentUser');
    const token = currentUser ? currentUser.token : null;
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  getRol(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  createRol(rol: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, rol, { headers: this.getAuthHeaders() });
  }

  updateRol(id: number, rol: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, rol, { headers: this.getAuthHeaders() });
  }

  deleteRol(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }
}

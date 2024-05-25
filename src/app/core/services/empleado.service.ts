import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionStorageService } from '../../session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = 'https://localhost:44369/api/Empleadoes';

  constructor(private http: HttpClient, private sessionStorage: SessionStorageService) { }

  private getAuthHeaders(): HttpHeaders {
    const token = this.sessionStorage.getItem('currentUser');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getEmpleados(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  getEmpleado(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  createEmpleado(empleado: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, empleado, { headers: this.getAuthHeaders() });
  }

  updateEmpleado(id: number, empleado: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, empleado, { headers: this.getAuthHeaders() });
  }

  deleteEmpleado(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }
}

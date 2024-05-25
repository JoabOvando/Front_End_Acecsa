import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionStorageService } from '../../session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'https://localhost:44369/api/Usuarios';

  constructor(private http: HttpClient, private sessionStorage: SessionStorageService) { }

  private getHeaders(): HttpHeaders {
    const token = this.sessionStorage.getItem('currentUser');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getUsuarios(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.getHeaders() });
  }

  getUsuario(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  createUsuario(usuario: any): Observable<any> {
    return this.http.post(this.apiUrl, usuario, { headers: this.getHeaders() });
  }

  updateUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, usuario, { headers: this.getHeaders() });
  }

  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}

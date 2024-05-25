import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  private baseUrl = 'https://localhost:44369/api/Recursoes';

  constructor(private http: HttpClient) { }

  // Manejo de errores
  private handleError(error: any) {
    console.error('Error inesperado: ', error);
    return throwError(error);
  }

  // Obtener todos los recursos
  getRecursos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Crear un nuevo recurso
  createRecurso(recurso: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.baseUrl, JSON.stringify(recurso), { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Obtener un recurso por ID
  getRecurso(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Actualizar un recurso
  updateRecurso(id: number, recurso: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(url, JSON.stringify(recurso), { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Eliminar un recurso
  deleteRecurso(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }
}



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonalEncargadoService {
  apiUrl = 'https://localhost:44369/api/PersonaEncargadums';

  constructor(private http: HttpClient) { }

  getPersonasEncargadas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(error => throwError(error))
      );
  }

  createPersonaEncargada(personaEncargada: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, personaEncargada)
      .pipe(
        catchError(error => throwError(error))
      );
  }

  updatePersonaEncargada(personaEncargada: any): Observable<any> {
    const url = `${this.apiUrl}/${personaEncargada.iD_Encargado}`;
    return this.http.put<any>(url, personaEncargada)
      .pipe(
        catchError(error => throwError(error))
      );
  }

  deletePersonaEncargada(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => throwError(error))
      );
  }
}

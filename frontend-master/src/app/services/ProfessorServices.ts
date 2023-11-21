import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor } from '../interfaces/Professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorServices {
  private apiUrl = 'http://localhost:8080/api/professor';

  constructor(private http: HttpClient) {}

  listarProfessores(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.apiUrl);
  }

  salvarProfessor(professor: Professor): Observable<Professor> {
    return this.http.post<Professor>(this.apiUrl, professor);
  }

  getProfessorById(id: number): Observable<Professor> {
    const url = `${this.apiUrl}/buscarporid?idprofessor=${id}`;
    return this.http.get<Professor>(url);
  }

  addProfessor(professor: Professor): Observable<any> {
    return this.http.post<any>(this.apiUrl, professor);
  }

  updateProfessor(professor: Professor): Observable<any> {
    return this.http.put<any>(this.apiUrl, professor);
  }

  deleteProfessor(id: number): Observable<any> {
    const url = `${this.apiUrl}/delete?id=${id}`;
    return this.http.delete<any>(url);
  }

  searchProfessorsByName(nome: string): Observable<Professor[]> {
    const url = `${this.apiUrl}/buscarpornome?nome=${nome}`;
    return this.http.get<Professor[]>(url);
  }
}

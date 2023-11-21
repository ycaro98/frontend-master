import { Professor } from 'src/app/interfaces/Professor';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfessorServices } from 'src/app/services/ProfessorServices';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent {
  private apiUrl = 'http://localhost:8080/professor';

  constructor(private http: HttpClient, private professorServices: ProfessorServices) {}

  ngOnInit(): void {
    this.carregarProfessores();
  }

  carregarProfessores(): void {
    this.professorServices.listarProfessores().subscribe(
      professores => {
        this.professores = professores;
      },
      error => {
        console.error('Erro ao carregar professores:', error);
      }
    );
  }

  professores: Professor[] = [];

  novoProfessor: Professor = {
    id: 0,
    nome: '',
    email: '',
    matricula: ''
  };

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

  criarNovoProfessor(): void {
    this.novoProfessor = {
      id: 0,
      nome: '',
      email: '',
      matricula: ''
    };
}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:3000/api/projects';  

  constructor(private http: HttpClient) { }

  // obter a lista de projetos
  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);  // Usando a variável apiUrl
  }

  // Método para adicionar um novo projeto
  addProject(project: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, project);  // Tipagem correta e URL consistente
  }
}

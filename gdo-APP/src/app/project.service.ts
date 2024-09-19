import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  getProje: any;
  getProjects() {
      throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:3000/api/project';

  constructor(private http: HttpClient) { }

  getProjetos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addProject(project: any): Observable<any> {
  return this.http.post(this.apiUrl, project)
  }

}

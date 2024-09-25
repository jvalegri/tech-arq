import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Issue } from './issue.model';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private issuesSubject = new BehaviorSubject<Issue[]>([]);
  public issues$ = this.issuesSubject.asObservable();


  constructor() { 
    const initialIssues: Issue[] = [
      {
        id: 1,
        title: 'Problema no carregamento da página',
        description: 'A página demora muito para carregar.',
        status: 'open',
        createdAt: new Date(),
      },
    ];
    this.issuesSubject.next(initialIssues);
  }
   // Método para atualizar os issues
   updateIssues(newIssues: Issue[]) {
    this.issuesSubject.next(newIssues);
  }

  // Método para adicionar um novo issue
  addIssue(issue: Issue) {
    const currentIssues = this.issuesSubject.getValue();
    this.issuesSubject.next([...currentIssues, issue]);
  }
}

 
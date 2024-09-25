import { Component, OnInit } from '@angular/core';
import { IssueService } from './issue.service';
import { Issue } from './issue.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-issues',
  standalone: true,
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css'], 
  imports: [FormsModule, CommonModule, RouterModule]
})
export class IssuesComponent implements OnInit{
  public issues: Issue[] = [];
  public newIssue: Issue = { id: 0, title: '', description: '', status: 'open', createdAt: new Date() };

  constructor(private issueService: IssueService, private router: Router) {}

  ngOnInit(): void {
    this.issueService.issues$.subscribe((issues: Issue[])=> {
      this.issues = issues;
    })
  }

  closeIssue(issueId: number) {
    const updatedIssues = this.issues.map((issue) => {
      if (issue.id === issueId) {
        return { ...issue, status: 'closed', updatedAt: new Date() };
      }
      return issue;
    });
    this.issueService.updateIssues(updatedIssues);
  }

  addNewIssue() {
    const newIssueId = this.issues.length > 0 ? Math.max(...this.issues.map(i => i.id)) + 1 : 1;
    const newIssue = { ...this.newIssue, id: newIssueId, createdAt: new Date() };

    // Serviço para adicionar a nova issue
    this.issueService.addIssue(newIssue);

    // Limpar o formulário
    this.newIssue = { id: 0, title: '', description: '', status: 'open', createdAt: new Date() };
  }

  pageOverview(){
    this.router.navigate(['/overview']);
  }


}

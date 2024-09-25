import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa o CommonModule
import { StorageComponent } from '../storage/storage.component';
import { IssueService } from '../issues/issue.service'; // Importa o serviço de issues
import { Issue } from '../issues/issue.model'; // Importa o modelo de Issue

@Component({
  selector: 'app-overview',
  standalone: true,
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  imports: [CommonModule, StorageComponent] // Não precisa do IssuesComponent aqui
})
export class OverviewComponent {
  issueList: Issue[] = [];  // Especifica o tipo como Issue[]

  constructor(private issueService: IssueService) {
    // Obtém a lista de issues diretamente do serviço
    this.issueService.issues$.subscribe((issues: Issue[]) => {
      this.issueList = issues;
    });
  }
}

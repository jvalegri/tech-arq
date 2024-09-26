import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa o CommonModule
import { RouterModule } from '@angular/router';
import { IssueService } from '../issues/issue.service'; // Importa o serviço de issues
import { StorageService } from '../storage/storage.service';
import { Issue } from '../issues/issue.model'; // Importa o modelo de Issue
import { Storage } from '../storage/storage.model';
import { StorageComponent } from '../storage/storage.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  imports: [CommonModule, RouterModule, StorageComponent] 
})
export class OverviewComponent {
  issueList: Issue[] = [];  
  storageList: Storage[] = [];

  // Um único construtor com ambos os serviços injetados
  constructor(
    private issueService: IssueService,
    private storageService: StorageService
  ) {
    // Obtém a lista de issues diretamente do serviço
    this.issueService.issues$.subscribe((issues: Issue[]) => {
      this.issueList = issues;
    });

    // Obtém a lista de elementos de storage diretamente do serviço
    this.storageService.element.subscribe((element: Storage[]) => {
      this.storageList = element;
    });
  }
}

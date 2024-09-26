import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { IssueService } from '../issues/issue.service'; 
import { StorageService } from '../storage/storage.service';
import { Issue } from '../issues/issue.model'; 
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
  storageCount: { [title: string]: number } = {}; // Contagem de elementos por nome

  constructor(
    private issueService: IssueService,
    private storageService: StorageService
  ) {
    this.issueService.issues$.subscribe((issues: Issue[]) => {
      this.issueList = issues;
    });

    this.storageService.element.subscribe((element: Storage[]) => {
      this.storageList = element;
      this.countStorageElements(); // Conta os elementos sempre que a lista é atualizada
    });
  }

  // Função para contar quantos elementos de cada nome existem
  countStorageElements(): void {
    this.storageCount = {}; // Reinicializa o contador
    this.storageList.forEach((storageItem) => {
      const title = storageItem.title; // Usa 'name' para identificar o item
      if (this.storageCount[title]) {
        this.storageCount[title]++; // Incrementa a contagem se já existir
      } else {
        this.storageCount[title] = 1; // Inicia a contagem
      }
    });
  }

  // Função auxiliar para obter os nomes (chaves) do objeto storageCount
  getStorageNames(): string[] {
    return Object.keys(this.storageCount);
  }
}

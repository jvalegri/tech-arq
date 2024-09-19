import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '/workspaces/tech-arq/gdo-APP/src/app/project.service'; 

@Component({
  selector: 'app-project',
  standalone: true,  // Indica que este é um componente standalone
  imports: [CommonModule],  // Importa o CommonModule para funcionalidades como *ngFor
  templateUrl: './project.component.html', 
})
export class ProjectComponent implements OnInit {
  project: any[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((data: any[]) => {
      this.project = data;
    });
  }
}

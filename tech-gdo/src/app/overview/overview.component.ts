import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa o CommonModule
import { StorageComponent } from '../storage/storage.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  imports: [CommonModule, StorageComponent] 
})
export class OverviewComponent {}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-main-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main-panel.component.html',
  styleUrl: './main-panel.component.css'
})
export class MainPanelComponent {

  constructor(private router:Router){}

  // Navigate para página de Issues
  pageIssues(){
    this.router.navigate(['/issues']);
  }

  pageOverview(){
    this.router.navigate(['/overview']);
  }

  pageStorage(){
    this.router.navigate(['/storage']);
  }

}


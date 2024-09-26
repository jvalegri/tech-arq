import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
    
  username: string = 'Usuário';
  password: string = 'Senha';

  constructor(private router: Router) { }

  onLogin(){
    if (this.username === 'admin' && this.password === 'admin') {
     
      this.router.navigate(['/main-panel']);
    } else {
      alert('Credenciais inválidas!');
    }
  }
}
  

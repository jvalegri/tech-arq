import { bootstrapApplication, ApplicationConfig } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideZoneChangeDetection } from '@angular/core';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Configuração de providers standalone
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};

// Inicialização da aplicação standalone
bootstrapApplication(AppComponent, {
  providers: [
    BrowserModule,
    FormsModule,
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true })
  ]
}).catch(err => console.error(err));

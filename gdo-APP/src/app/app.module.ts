import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // abordagem atualizada do angular 18 + o provide... é um método usado para
// configurar o HttpClient. O withInte... configura os interceptadores para o Http.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes'; 
import { AppComponent } from './app.component'; 


@NgModule({
  declarations: [/* componentes */],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }

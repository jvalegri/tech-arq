import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';
import { IssueComponent } from './issue/issue.component';
import { StorageComponent } from './storage/storage.component';

export const routes: Routes = [
        {path: '', component: LoginComponent },
        {path: 'overview', component: OverviewComponent},
        {path: 'issue', component: IssueComponent},
        {path: 'storage', component: StorageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // forRoot é utilizado para definir o roteamento principal da aplicação
    exports: [RouterModule] // exporta o modulo RouterModule para ser acessível em outros módulos
})
export class AppRoutingModule{} // DEfine a classe (módulo) de roteamento da
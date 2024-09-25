import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuesComponent } from './issues/issues.component';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';
import { StorageComponent } from './storage/storage.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'issues', component: IssuesComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'storage', component: StorageComponent},
  { path: '', redirectTo: 'overview', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

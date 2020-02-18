import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReferencesComponent } from './references/references.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  {
    path: 'reference',
    loadChildren: () => import('./references/references.module').then(m => m.ReferencesModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

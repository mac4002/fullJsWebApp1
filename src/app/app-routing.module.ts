// Modules d'angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components persos
import { Error404Component } from './errors/error404/error404.component';

// On définit les routes
const routes: Routes = [
  { path: 'error-404', component: Error404Component},
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

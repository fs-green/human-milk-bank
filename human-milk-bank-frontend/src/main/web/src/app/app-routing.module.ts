import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

/**
 * Hier wird das Routing festgelegt. In diesem Beispiel wird beim leeren path in der URL auf
 * die Komponente HomeComponent verwiesen. Bei Login auf LoginComponent und bei irgendeinem
 * anderen Wert auf leer, also wieder auf HomeComponent verwiesen.
 */
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: ''}
];

/**
 * Hier wird die AppRoutingModule als Angular Komponente gehandelt und beinhaltet lediglich
 * die Routes der Applikation
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
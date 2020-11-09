import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EPortalComponent } from './pages/e-portal/e-portal.component';
import { FmPortalComponent } from './pages/fm-portal/fm-portal.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'employeeportal', component: EPortalComponent},
  { path: 'fmportal', component: FmPortalComponent},
  { path: 'home', component: HomeComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

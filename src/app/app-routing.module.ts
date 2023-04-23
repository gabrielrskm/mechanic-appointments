import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: 'auth',
    component : AuthComponent
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component')
  },
  {
    path: 'appointment',
    loadComponent: () => import('./appointment/appointment.component')
  },
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

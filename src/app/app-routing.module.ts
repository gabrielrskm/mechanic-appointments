import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { authGuard } from './core/guard/auth.guard';
import AppointmentComponent from './appointment/appointment.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    pathMatch : 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    canActivate: [authGuard],
    children: [
      {
        path: 'appointment',
        component: AppointmentComponent,
        outlet: 'second',
      },
      {
        path: 'user',
        component: UserComponent,
        outlet: 'second',
      },
      {
        path: 'admin',
        component: AdminComponent,
        outlet: 'second',
      },
      {
        path: '', redirectTo: 'appointment', pathMatch: 'full',outlet: 'second',
      },
      {
        path: '**', redirectTo: 'appointment', pathMatch: 'full',outlet: 'second',
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

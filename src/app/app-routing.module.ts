// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './presentations/theme/layout/admin/admin.component';
import { GuestComponent } from './presentations/theme/layout/guest/guest.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth/signin',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./presentations/pages/dashboard/dash-analytics.component'),
        canActivate: [AuthGuard],data: { roles: ['client'] }
      },
      {
        path: 'account-management',
        loadComponent: () => import('./presentations/pages/account-management/account-management.component').then(m => m.AccountManagementComponent),
        canActivate: [AuthGuard],data: { roles: ['client'] }
      },
      { path: 'new_offer',
        loadComponent: () => import('./presentations/pages/new-offer/new-offer.component').then(m => m.NewOfferComponent),
        canActivate: [AuthGuard],data: { roles: ['client'] }
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'auth/signup',
        loadComponent: () => import('./presentations/pages/general/authentication/sign-up/sign-up.component')
      },
      {
        path: 'auth/signin',
        loadComponent: () => import('./presentations/pages/general/authentication/sign-in/sign-in.component')
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

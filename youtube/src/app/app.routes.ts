import { Routes } from '@angular/router'
import { authGuard } from './core/guards/auth.guard.js'

export const routes: Routes = [
  {
    path: '',
    canMatch: [authGuard],
    pathMatch: 'full',
    loadComponent: () =>
      import(
        './youtube/components/search-results/search-results.component.js'
      ).then(M => M.SearchResultsComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import(
        './auth/components/login/login.component.js'
      ).then(M => M.LoginComponent),
  },
  {
    path: 'video/:id',
    loadComponent: () =>
      import(
        './youtube/components/video-detailed-info/video-detailed-info.component.js'
      ).then(M => M.VideoDetailedInfoComponent),
    canMatch: [authGuard],
  },
  {
    path: 'admin',
    loadComponent: () =>
      import(
        './admin/components/admin/admin.component.js'
      ).then(M => M.AdminComponent),
  },
  {
    path: '**',
    pathMatch: 'full',
    loadComponent: () =>
      import(
        './core/components/not-found/not-found.component.js'
      ).then(M => M.NotFoundComponent),
    canMatch: [authGuard],
  },
]

import { Routes } from '@angular/router'
import { authGuard } from './core/guards/auth.guard.js'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './youtube/components/search-results/search-results.component.js'
      ).then((M) => M.SearchResultsComponent),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import(
        './auth/components/login/login.component.js'
      ).then((M) => M.LoginComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import(
        './core/components/not-found/not-found.component.js'
      ).then((M) => M.NotFoundComponent),
    canActivate: [authGuard],
  },
]

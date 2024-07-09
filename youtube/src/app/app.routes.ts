import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './youtube/components/search-results/search-results.component.js'
      ).then((M) => M.SearchResultsComponent),
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
  },
]

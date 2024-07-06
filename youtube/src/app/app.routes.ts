import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './youtube/components/search-results/search-results.component.js'
      ).then((M) => M.SearchResultsComponent),
  },
]

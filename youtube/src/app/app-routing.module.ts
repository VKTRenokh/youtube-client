import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { authGuard } from './core/guards/auth.guard.js'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
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
        path: '**',
        pathMatch: 'full',
        loadComponent: () =>
          import(
            './core/components/not-found/not-found.component.js'
          ).then(M => M.NotFoundComponent),
        canMatch: [authGuard],
      },
    ]),
  ],
})
export class AppRoutingModule {}

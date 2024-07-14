import { Router } from '@angular/router'
import { getCurrentRoute } from './get-current-route'

export const createLoginUrlTree = (router: Router) =>
  router.createUrlTree(['/login'], {
    queryParams: {
      rederictTo: getCurrentRoute(),
    },
  })

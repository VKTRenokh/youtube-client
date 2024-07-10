import { Router } from '@angular/router'

export const createLoginUrlTree = (router: Router) =>
  router.createUrlTree(['/login'])

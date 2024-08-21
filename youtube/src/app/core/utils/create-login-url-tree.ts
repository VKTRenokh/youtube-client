import { Router } from '@angular/router'
import { createRederictToQueryParams } from './create-rederict-to-query-params'

export const createLoginUrlTree = (router: Router) =>
  router.createUrlTree(
    ['/login'],
    createRederictToQueryParams(),
  )

import { Router } from '@angular/router'

export const createLoginUrlTree = (router: Router) =>
  router.createUrlTree(['/login'])

// TODO: Maybe implement redericTo
//return router.createUrlTree(['/login'], {
//  queryParams: router.routerState.root.queryParams.subscribe{
//    rederictTo: router.routerState.snapshot.url,
//  },
//})

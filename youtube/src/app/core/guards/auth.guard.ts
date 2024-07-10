import { inject } from '@angular/core'
import {
  CanActivateFn,
  Router,
  UrlTree,
} from '@angular/router'
import { AuthService } from '../../auth/services/auth/auth.service'
import { createLoginUrlTree } from '../utils/create-login-url-tree'

const doGuard = (
  router: Router,
  authService: AuthService,
) => {
  if (!authService.isLogined()) {
    return createLoginUrlTree(router)
  }
  return true
}

export const authGuard: CanActivateFn = ():
  | UrlTree
  | boolean => doGuard(inject(Router), inject(AuthService))

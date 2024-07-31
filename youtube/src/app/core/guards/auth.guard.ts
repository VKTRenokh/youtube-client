import { inject } from '@angular/core'
import { CanMatchFn, Router } from '@angular/router'
import { AuthService } from '../../auth/services/auth/auth.service'
import { createLoginUrlTree } from '../utils/create-login-url-tree'

const guard = (router: Router, authService: AuthService) =>
  !authService.isLogined()
    ? createLoginUrlTree(router)
    : true

// TODO: use angular Location service instead of window.loation.path in rederict
// to (https://angular.dev/api/common/Location?tab=api)
export const authGuard: CanMatchFn = () =>
  guard(inject(Router), inject(AuthService))

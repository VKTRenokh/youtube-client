import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { AuthService } from '../../auth/services/auth/auth.service'
import { createLoginUrlTree } from '../utils/create-login-url-tree'

const guard = (router: Router, authService: AuthService) =>
  !authService ? createLoginUrlTree(router) : false

export const authGuard: CanActivateFn = () =>
  guard(inject(Router), inject(AuthService))

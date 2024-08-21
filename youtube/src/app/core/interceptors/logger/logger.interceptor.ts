import { HttpInterceptorFn } from '@angular/common/http'
import { LOGGER_TOKEN } from '../../providers/logger/logger.provider'
import { inject } from '@angular/core'

export const loggerInterceptor: HttpInterceptorFn = (
  req,
  next,
) => {
  inject(LOGGER_TOKEN).log(req.method, req.url)
  return next(req)
}

import { InjectionToken } from '@angular/core'

export type CustomErrors = Record<string, string>

export const CUSTOM_ERRORS =
  new InjectionToken<CustomErrors>('CUSTOM_ERRORS')

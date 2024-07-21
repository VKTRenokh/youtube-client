import { InjectionToken } from '@angular/core'

export type CustomErrors = Map<string, string>

// TODO: Use an object (or a function) to specifiy different validation messages for different
//       formControls
export const CUSTOM_ERRORS =
  new InjectionToken<CustomErrors>('CUSTOM_ERRORS')

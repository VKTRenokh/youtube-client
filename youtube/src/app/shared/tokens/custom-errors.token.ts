import { InjectionToken } from '@angular/core'

export type CustomErrors = Record<string, string>

// TODO: Use an object (or a function) to specifiy different validation messages for different
//       formControls
//       Or make an input in the validation errors component that merges
//       provided custom errors with the errors that was given via input
export const CUSTOM_ERRORS =
  new InjectionToken<CustomErrors>('CUSTOM_ERRORS')

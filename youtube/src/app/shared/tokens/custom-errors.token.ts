import { InjectionToken } from '@angular/core'

// TODO: Use an object to specifiy different validation messages for different
//       formControls
export const CUSTOM_ERRORS = new InjectionToken<
  Map<string, string>
>('CUSTOM_ERRORS')

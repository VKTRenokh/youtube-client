import { InjectionToken } from '@angular/core'

export const CUSTOM_ERRORS = new InjectionToken<
  Map<string, string>
>('CUSTOM_ERRORS')

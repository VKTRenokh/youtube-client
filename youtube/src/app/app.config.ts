import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core'
import {
  provideRouter,
  withComponentInputBinding,
} from '@angular/router'

import { routes } from './app.routes'
import { provideLogger } from './core/providers/logger/logger.provider'

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
    provideLogger(),
  ],
}

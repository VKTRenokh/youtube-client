import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core'
import {
  provideRouter,
  withComponentInputBinding,
} from '@angular/router'

import { routes } from './app.routes'
import {
  LOGGER_TOKEN,
  loggerFactory,
} from './core/services/logger/logger.service'

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
    { provide: LOGGER_TOKEN, useFactory: loggerFactory },
  ],
}

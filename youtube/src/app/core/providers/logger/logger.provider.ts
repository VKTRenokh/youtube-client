import { InjectionToken, isDevMode } from '@angular/core'
import { Logger } from '../../utils/create-logger-with-prefix'
import { DevLoggerService } from '../../services/dev-logger/dev-logger.service'
import { ProdLoggerService } from '../../services/prod-logger/prod-logger.service'

export const LOGGER_TOKEN = new InjectionToken<Logger>(
  'Logger',
)

export const loggerFactory = () =>
  isDevMode()
    ? new DevLoggerService()
    : new ProdLoggerService()

export const provideLogger = () => ({
  provide: LOGGER_TOKEN,
  useFactory: loggerFactory,
})

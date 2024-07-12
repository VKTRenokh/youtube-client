import { InjectionToken, isDevMode } from '@angular/core'
import { DevLoggerService } from '../dev-logger/dev-logger.service'
import { ProdLoggerService } from '../prod-logger/prod-logger.service'
import { Logger } from '../../utils/create-logger-with-prefix'

export const LOGGER_TOKEN = new InjectionToken<Logger>(
  'Logger',
)

export const loggerFactory = () =>
  isDevMode()
    ? new DevLoggerService()
    : new ProdLoggerService()

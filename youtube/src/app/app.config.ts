import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideLogger } from './core/providers/logger/logger.provider'
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http'
import { youtubeInterceptor } from './youtube/interceptors/youtube/youtube.interceptor'
import { loggerInterceptor } from './core/interceptors/logger/logger.interceptor'

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideLogger(),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        youtubeInterceptor,
        loggerInterceptor,
      ]),
    ),
  ],
}

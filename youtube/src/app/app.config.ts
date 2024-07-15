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
import {
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http'
import { youtubeInterceptor } from './youtube/interceptors/youtube/youtube.interceptor'

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
    provideLogger(),
    provideHttpClient(
      withInterceptors([youtubeInterceptor]),
    ),
  ],
}

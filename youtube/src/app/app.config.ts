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
  withFetch,
  withInterceptors,
} from '@angular/common/http'
import { youtubeInterceptor } from './youtube/interceptors/youtube/youtube.interceptor'
import { loggerInterceptor } from './core/interceptors/logger/logger.interceptor'
import { provideStore } from '@ngrx/store'
import { provideEffects } from '@ngrx/effects'
import { YoutubeEffects } from './state/effects/youtube.effect'
import { youtubeReducer } from './state/reducers/youtube.reducer'

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
    provideLogger(),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        youtubeInterceptor,
        loggerInterceptor,
      ]),
    ),
    provideStore({ youtube: youtubeReducer }),
    provideEffects(YoutubeEffects),
  ],
}

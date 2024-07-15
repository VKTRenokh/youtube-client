import { HttpInterceptorFn } from '@angular/common/http'
import { environment } from '../../../../environments/environment'
import { createYoutubeUrl } from '../../utils/create-youtube-url'

export const youtubeInterceptor: HttpInterceptorFn = (
  req,
  next,
) =>
  next(
    req.clone({
      url: createYoutubeUrl(req.url),
      setParams: { key: environment.apiToken },
    }),
  )

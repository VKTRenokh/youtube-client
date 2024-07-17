import { environment } from '../../../environments/environment'

export const createYoutubeUrl = (url: string) =>
  `${environment.apiUrl}${url}`

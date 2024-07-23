import { createActionGroup, props } from '@ngrx/store'
import { VideosResponse } from '../../youtube/models/response.model'

export const YoutubeActions = createActionGroup({
  source: 'Search Results Page',
  events: {
    searchVideos: props<{ query: string }>(),
    searchVideosSuccess: props<{ data: VideosResponse }>(),
    searchVideosFailure: props<{
      error: Error
    }>(),
  },
})

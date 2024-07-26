import {
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store'
import { VideosResponse } from '../../youtube/models/response.model'
import {
  CustomCard,
  CustomCardInfo,
} from '../../admin/models/custom-card.model'

export interface VideosResponseData {
  data: VideosResponse
}

export const YoutubeActions = createActionGroup({
  source: 'Youtube',
  events: {
    searchVideos: props<{ query: string }>(),
    searchVideosSuccess: props<VideosResponseData>(),
    searchVideosFailure: props<{
      error: Error
    }>(),

    createCustomCard: props<{ card: CustomCardInfo }>(),
    createCustomCardSucces: props<{
      card: CustomCard
    }>(),
    removeCustomCard: props<{ id: string }>(),

    nextPage: emptyProps(),
    nextPageSuccess: props<VideosResponseData>(),

    prevPage: emptyProps(),
    prevPageSuccess: props<VideosResponseData>(),
  },
})

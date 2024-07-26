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

export const YoutubeActions = createActionGroup({
  source: 'Youtube',
  events: {
    searchVideos: props<{ query: string }>(),
    searchVideosSuccess: props<{ data: VideosResponse }>(),
    searchVideosFailure: props<{
      error: Error
    }>(),

    createCustomCard: props<{ card: CustomCardInfo }>(),
    createCustomCardSucces: props<{
      card: CustomCard
    }>(),
    removeCustomCard: props<{ id: string }>(),

    nextPage: emptyProps(),
    nextPageSuccess: props<{ data: VideosResponse }>(),

    prevPage: emptyProps(),
    prevPageSuccess: props<{ data: VideosResponse }>(),
  },
})

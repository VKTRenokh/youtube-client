import { createReducer, on } from '@ngrx/store'
import { VideosResponse } from '../../youtube/models/response.model'
import { YoutubeActions } from '../actions/youtube.actions'
import { CustomCard } from '../../admin/models/custom-card.model'

export interface State {
  data: VideosResponse | null
  customCards: CustomCard[]
  loading: boolean
  error: null | Error
}

export const initialState: State = {
  data: null,
  customCards: [
    {
      id: 'hello',
      tags: ['Hello'],
      title: 'Super Useful Title',
      isCustom: true,
      createdAt: new Date().toString(),
      imageLink:
        'https://preview.redd.it/my-second-build-and-first-serious-one-v0-amqmch968ked1.jpeg?width=320&crop=smart&auto=webp&s=b1ef735b323b1fc8202928f5117d1cea9b646f14',
      videoLink: 'Tetst',
      description: 'Description',
    },
  ],
  loading: false,
  error: null,
}

export const youtubeReducer = createReducer(
  initialState,
  on(YoutubeActions.searchVideos, state => ({
    ...state,
    loading: true,
  })),
  on(
    YoutubeActions.searchVideosSuccess,
    (state, action) => ({
      ...state,
      data: action.data,
      loading: false,
    }),
  ),
  on(
    YoutubeActions.searchVideosFailure,
    (state, action) => ({
      ...state,
      loading: false,
      error: action.error,
    }),
  ),
  on(
    YoutubeActions.createCustomCardSucces,
    (state, action) => ({
      ...state,
      customCards: [...state.customCards, action.card],
    }),
  ),
  on(YoutubeActions.removeCustomCard, (state, action) => ({
    ...state,
    customCards: state.customCards.filter(
      card => card.id === action.id,
    ),
  })),
)

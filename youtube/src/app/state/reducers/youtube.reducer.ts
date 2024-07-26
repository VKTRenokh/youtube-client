import { createReducer, on } from '@ngrx/store'
import { VideosResponse } from '../../youtube/models/response.model'
import { YoutubeActions } from '../actions/youtube.actions'
import { CustomCard } from '../../admin/models/custom-card.model'

export interface State {
  // TODO: use `VideoItem[]` instead of VideosResponse
  data: VideosResponse | null
  customCards: CustomCard[]
  loading: boolean
  error: null | Error
  nextPage: string | null
  prevPage: string | null
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
  prevPage: null,
  nextPage: null,
}

export const youtubeReducer = createReducer(
  initialState,
  on(YoutubeActions.searchVideos, state => ({
    ...state,
    loading: true,
  })),
  on(
    YoutubeActions.searchVideosSuccess,
    (state, { data }) => ({
      ...state,
      data,
      prevPage: data.prevPageToken,
      nextPage: data.nextPageToken,
      loading: false,
    }),
  ),
  on(
    YoutubeActions.searchVideosFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      error,
    }),
  ),
  on(
    YoutubeActions.createCustomCardSucces,
    (state, { card }) => ({
      ...state,
      customCards: [...state.customCards, card],
    }),
  ),
  on(YoutubeActions.removeCustomCard, (state, { id }) => ({
    ...state,
    customCards: state.customCards.filter(
      card => card.id === id,
    ),
  })),
  on(YoutubeActions.nextPage, state => ({
    ...state,
    isLoading: true,
  })),
  on(YoutubeActions.nextPageSuccess, (state, { data }) => ({
    ...state,
    data,
    nextPage: data.nextPageToken,
    prevPage: data.prevPageToken,
    isLoading: false,
  })),
  on(YoutubeActions.prevPage, state => ({
    ...state,
    isLoading: true,
  })),
  on(YoutubeActions.prevPageSuccess, (state, { data }) => ({
    ...state,
    isLoading: false,
    nextPage: data.nextPageToken,
    prevPage: data.prevPageToken,
    data,
  })),
)

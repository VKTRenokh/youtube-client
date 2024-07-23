import { createReducer, on } from '@ngrx/store'
import { VideosResponse } from '../../youtube/models/response.model'
import { YoutubeActions } from '../actions/youtube.actions'

export interface State {
  data: VideosResponse | null
  loading: boolean
  error: null | Error
}

export const initialState: State = {
  data: null,
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
)

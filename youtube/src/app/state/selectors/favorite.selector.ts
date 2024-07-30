import { createSelector } from '@ngrx/store'
import { AppState } from '../types/app-state.type'
import { State } from '../reducers/favorites.reducer'
import { selectData as selectVideos } from './youtube.selector'

export const selectFeature = (state: AppState) =>
  state.favorites

export const selectFavoriteIds = createSelector(
  selectFeature,
  (state: State) => state.data,
)

export const selectFavoriteVideos = createSelector(
  selectFavoriteIds,
  selectVideos,
  (ids, items) =>
    items?.filter(value => ids.includes(value.id)),
)

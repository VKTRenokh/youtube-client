import { createSelector } from '@ngrx/store'
import { AppState } from '../types/app-state.type'

export const selectFeature = (state: AppState) =>
  state.favorites

export const selectFavoriteIds = createSelector(
  selectFeature,
  favorites => favorites.data,
)

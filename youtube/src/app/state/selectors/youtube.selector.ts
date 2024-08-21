import { createSelector } from '@ngrx/store'
import { AppState } from '../types/app-state.type'

export const selectFeature = (state: AppState) =>
  state.youtube

export const selectData = createSelector(
  selectFeature,
  youtube => youtube.data,
)

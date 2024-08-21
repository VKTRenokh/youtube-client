import { createReducer, on } from '@ngrx/store'
import { FavoriteActions } from '../actions/favorite.actions'
import { concatSome } from '../../shared/utils/concat-some'
import { isNotEquals } from '../../shared/utils/is-not-equals'

export interface State {
  data: string[]
}

export const initialState: State = {
  data: [],
}

export const favoritesReducer = createReducer(
  initialState,
  on(FavoriteActions.add, (state, { id }) => ({
    ...state,
    data: concatSome(state.data, id),
  })),
  on(FavoriteActions.remove, (state, { id }) => ({
    ...state,
    data: state.data?.filter(isNotEquals(id)),
  })),
)

import { createReducer, on } from '@ngrx/store'
import { FavoriteActions } from '../actions/favorite.actions'
import { concatSome } from '../../shared/utils/concat-some'

export interface State {
  data: string[] | null
}

export const initialState: State = {
  data: null,
}

export const favoritesReducer = createReducer(
  initialState,
  on(FavoriteActions.add, (state, { id }) => {
    console.log(state, {
      ...state,
      data: concatSome(state.data, id),
    })
    return { ...state, data: concatSome(state.data, id) }
  }),
)

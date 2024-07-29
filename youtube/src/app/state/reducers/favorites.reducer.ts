import { createReducer } from '@ngrx/store'

export interface State {
  data: string[] | null
}

export const initialState: State = {
  data: null,
}

export const favoritesReducer = createReducer(initialState)

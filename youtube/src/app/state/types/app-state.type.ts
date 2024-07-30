import { State as FavoriteState } from '../reducers/favorites.reducer'

export interface AppState {
  youtube: FavoriteState
  favorites: FavoriteState
}

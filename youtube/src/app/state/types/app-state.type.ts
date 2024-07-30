import { State as FavoriteState } from '../reducers/favorites.reducer'
import { State as YoutubeState } from '../reducers/youtube.reducer'

export interface AppState {
  youtube: YoutubeState
  favorites: FavoriteState
}

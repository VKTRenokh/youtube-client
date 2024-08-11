import { AppState } from '../types/app-state.type'
import { selectFavoriteIds } from './favorite.selector'

describe('Favorite selectors', () => {
  const favoriteIds = ['bimbom']

  const initialState: AppState = {
    youtube: {
      data: [],
      loading: false,
      customCards: [],
      error: null,
      prevPage: null,
      nextPage: null,
    },
    favorites: {
      data: favoriteIds,
    },
  }

  it('should select favorite ids', () => {
    expect(
      selectFavoriteIds.projector(initialState.favorites),
    ).toBe(favoriteIds)
  })
})

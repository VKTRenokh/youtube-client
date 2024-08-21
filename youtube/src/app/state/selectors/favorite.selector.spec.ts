import { card, favoriteIds } from '../mock/initial-state'
import { initialState } from '../mock/initial-state'

import {
  selectFavoriteIds,
  selectFavoriteVideos,
} from './favorite.selector'

describe('Favorite selectors', () => {
  it('should select favorite ids', () => {
    expect(
      selectFavoriteIds.projector(initialState.favorites),
    ).toBe(favoriteIds)
  })

  it('should select favorite vidoes', () => {
    const result = selectFavoriteVideos.projector(
      initialState.favorites.data,
      initialState.youtube.data,
    )

    expect(result).toBeTruthy()
    expect(result![0]).toBe(card)
  })
})

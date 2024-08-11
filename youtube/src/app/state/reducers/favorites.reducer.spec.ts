import { FavoriteActions } from '../actions/favorite.actions'
import {
  initialState,
  favoritesReducer,
} from './favorites.reducer'

describe('Favorites Reducer', () => {
  it('should return the default state', () => {
    expect(
      favoritesReducer(initialState, {
        type: 'dasfadfdasf',
      }),
    ).toBe(initialState)
  })

  it('should add new id to the store', () => {
    const id = 'pipka'
    expect(
      favoritesReducer(
        initialState,
        FavoriteActions.add({ id: id }),
      ).data.includes(id),
    ).toBeTruthy()
  })
})

import { FavoriteActions } from '../actions/favorite.actions'
import {
  initialState,
  favoritesReducer,
} from './favorites.reducer'

describe('Favorites Reducer', () => {
  const id = 'pipka'

  it('should return the default state', () => {
    expect(
      favoritesReducer(initialState, {
        type: 'dasfadfdasf',
      }),
    ).toBe(initialState)
  })

  it('should add new id to the store', () => {
    expect(
      favoritesReducer(
        initialState,
        FavoriteActions.add({ id: id }),
      ).data.includes(id),
    ).toBeTruthy()
  })

  it('should remove newly added id from the store', () => {
    const newState = favoritesReducer(
      initialState,
      FavoriteActions.add({ id }),
    )
    expect(newState.data.includes(id)).toBeTruthy()

    expect(
      favoritesReducer(
        newState,
        FavoriteActions.remove({ id }),
      ).data.includes(id),
    ).toBeFalsy()
  })
})

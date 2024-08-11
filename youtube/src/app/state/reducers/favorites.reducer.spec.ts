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
})

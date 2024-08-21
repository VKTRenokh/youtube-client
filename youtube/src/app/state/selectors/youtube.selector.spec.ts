import { card, initialState } from '../mock/initial-state'
import { selectData } from './youtube.selector'

describe('Youtube Selectors', () => {
  it('should select data', () => {
    expect(selectData(initialState)![0]).toBe(card)
  })
})

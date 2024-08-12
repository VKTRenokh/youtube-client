import { YoutubeActions } from '../actions/youtube.actions'
import { customCard } from '../mock/custom-card'
import { initialState } from '../mock/initial-state'
import { youtubeReducer } from './youtube.reducer'

describe('Youtube Reducer', () => {
  it('should set loading to true on searchVideos action', () => {
    expect(
      youtubeReducer(
        initialState.youtube,
        YoutubeActions.searchVideos,
      ).loading,
    ).toBeTruthy()
  })

  it('should set loading to true on nextPage action', () => {
    expect(
      youtubeReducer(
        initialState.youtube,
        YoutubeActions.nextPage,
      ).loading,
    ).toBeTruthy()
  })

  it('should set loading to true on prevPage action', () => {
    expect(
      youtubeReducer(
        initialState.youtube,
        YoutubeActions.prevPage,
      ).loading,
    ).toBeTruthy()
  })

  it('should correctly add a custom card', () => {
    expect(
      youtubeReducer(
        initialState.youtube,
        YoutubeActions.createCustomCardSucces({
          card: customCard,
        }),
      ).customCards.includes(customCard),
    ).toBeTruthy()
  })
})

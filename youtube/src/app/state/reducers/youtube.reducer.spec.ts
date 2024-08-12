import { YoutubeActions } from '../actions/youtube.actions'
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
})

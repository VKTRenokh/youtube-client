import { VideoItem } from '../../youtube/models/response.model'
import { AppState } from '../types/app-state.type'
import {
  selectFavoriteIds,
  selectFavoriteVideos,
} from './favorite.selector'

describe('Favorite selectors', () => {
  const id = 'bimbom'
  const favoriteIds = [id]

  const card: VideoItem = {
    id,
    etag: 'asfdas',
    kind: 'asfds',
    snippet: {
      tags: ['asf'],
      title: 'adfasf',
      channelId: 'adfasdf',
      localized: {
        title: 'adfasdf',
        description: 'afasdfjlk',
      },
      description: 'adf',
      categoryId: 'sdfasdfs',
      thumbnails: {
        maxres: {
          url: 'asfsadf',
          width: 22,
          height: 2,
        },
        high: {
          url: 'asfsadf',
          width: 22,
          height: 2,
        },
        medium: {
          url: 'asfsadf',
          width: 22,
          height: 2,
        },
        default: {
          url: 'asfsadf',
          width: 22,
          height: 2,
        },
        standard: {
          url: 'asfsadf',
          width: 22,
          height: 2,
        },
      },
      publishedAt: new Date().toString(),
      channelTitle: 'adfasdf',
      defaultAudioLanguage: 'adsfsad',
      liveBroadcastContent: 'adfsadf',
    },
    statistics: {
      likeCount: '32432',
      viewCount: 'dsafasdf',
      commentCount: 'dfолвафыва',
      dislikeCount: 'adfsadf',
      favoriteCount: 'sdfasdf',
    },
  }

  const initialState: AppState = {
    youtube: {
      data: [card],
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

  it('should select favorite vidoes', () => {
    const result = selectFavoriteVideos.projector(
      initialState.favorites.data,
      initialState.youtube.data,
    )

    expect(result).toBeTruthy()
    expect(result![0]).toBe(card)
  })
})

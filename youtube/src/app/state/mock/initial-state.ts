import { VideoItem } from '../../youtube/models/response.model'
import { AppState } from '../types/app-state.type'

export const id = 'bimbom'
export const favoriteIds = [id]

export const card: VideoItem = {
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

export const initialState: AppState = {
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

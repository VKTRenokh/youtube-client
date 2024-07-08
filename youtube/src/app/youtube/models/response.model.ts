export interface VideoThumbnail {
  url: string
  width: number
  height: number
}

export interface VideoThumbnails {
  default: VideoThumbnail
  medium: VideoThumbnail
  high: VideoThumbnail
  standard: VideoThumbnail
  maxres: VideoThumbnail
}

export interface VideoLocalization {
  title: string
  description: string
}

export interface VideoSnippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: VideoThumbnails
  channelTitle: string
  tags: string[]
  categoryId: string
  liveBroadcastContent: string
  localized: VideoLocalization
  defaultAudioLanguage: string
}

export interface VideoStatistics {
  viewCount: string
  likeCount: string
  dislikeCount: string
  favoriteCount: string
  commentCount: string
}

export interface VideoItem {
  kind: string
  etag: string
  id: string
  snippet: VideoSnippet
  statistics: VideoStatistics
}

export interface PageInfo {
  totalResults: number
  resultsPerPage: number
}

export interface VideosResponse {
  kind: string
  etag: string
  pageInfo: PageInfo
  items: VideoItem[]
}
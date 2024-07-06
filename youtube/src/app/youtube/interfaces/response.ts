export interface Thumbnail {
  url: string
  width: number
  height: number
}

export interface Thumbnails {
  default: Thumbnail
  medium: Thumbnail
  high: Thumbnail
  standard: Thumbnail
  maxres: Thumbnail
}

export interface Localized {
  title: string
  description: string
}

export interface Snippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  tags: string[]
  categoryId: string
  liveBroadcastContent: string
  localized: Localized
  defaultAudioLanguage: string
}

export interface Statistics {
  viewCount: string
  likeCount: string
  dislikeCount: string
  favoriteCount: string
  commentCount: string
}

export interface Item {
  kind: string
  etag: string
  id: string
  snippet: Snippet
  statistics: Statistics
}

export interface PageInfo {
  totalResults: number
  resultsPerPage: number
}

export interface VideosResponse {
  kind: string
  etag: string
  pageInfo: PageInfo
  items: Item[]
}

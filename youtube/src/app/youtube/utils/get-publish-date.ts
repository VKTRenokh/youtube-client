import { SearchVideoItem } from '../models/response.model'

export const getPublishDate = (video: SearchVideoItem) =>
  new Date(video.snippet.publishedAt)

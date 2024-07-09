import { VideoItem } from '../models/response.model'

export const getPublishDate = (video: VideoItem) =>
  new Date(video.snippet.publishedAt)

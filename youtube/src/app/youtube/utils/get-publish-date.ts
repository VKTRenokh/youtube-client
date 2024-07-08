import { VideoItem } from '../interfaces/response'

export const getPublishDate = (video: VideoItem) =>
  new Date(video.snippet.publishedAt)

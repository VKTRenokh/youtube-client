import { VideoItem } from '../interfaces/response'

export const getViewsCount = (video: VideoItem) =>
  video.statistics.viewCount

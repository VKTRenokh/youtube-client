import { VideoItem } from '../models/response.model'

export const getViewsCount = (video: VideoItem) =>
  video.statistics.viewCount

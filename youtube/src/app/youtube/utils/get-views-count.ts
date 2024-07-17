import { SearchVideoItem } from '../models/response.model'

export const getViewsCount = (video: SearchVideoItem) =>
  video.statistics.viewCount

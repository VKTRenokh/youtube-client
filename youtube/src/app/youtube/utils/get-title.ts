import { VideoItem } from '../models/response.model'

export const getTitle = (item: VideoItem) =>
  item.snippet.title

import { isCustomCard } from '../../admin/models/custom-card.model'
import { Item } from '../models/item.model'

export const getPublishDate = (video: Item) =>
  isCustomCard(video)
    ? new Date(video.createdAt)
    : new Date(video.snippet.publishedAt)

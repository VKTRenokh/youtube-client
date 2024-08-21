import { isCustomCard } from '../../admin/models/custom-card.model'
import { Item } from '../models/item.model'

const MAX_RANDOM_VIEWS_COUNT = 100_000

export const createRandomViewCount = () =>
  Math.floor(Math.random() * MAX_RANDOM_VIEWS_COUNT)

export const getViewsCount = (video: Item) =>
  isCustomCard(video)
    ? createRandomViewCount()
    : video.statistics.viewCount

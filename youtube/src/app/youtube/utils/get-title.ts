import { isCustomCard } from '../../admin/models/custom-card.model'
import { Item } from '../models/item.model'

export const getTitle = (item: Item) =>
  isCustomCard(item) ? item.title : item.snippet.title

import {
  CustomCard,
  isCustomCard,
} from '../../admin/models/custom-card.model'
import { SearchVideoItem } from '../models/response.model'

export const getTitle = (
  item: SearchVideoItem | CustomCard,
) => (isCustomCard(item) ? item.title : item.snippet.title)

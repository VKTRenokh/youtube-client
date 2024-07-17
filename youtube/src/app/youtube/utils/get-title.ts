import { SearchVideoItem } from '../models/response.model'

export const getTitle = (item: SearchVideoItem) =>
  item.snippet.title

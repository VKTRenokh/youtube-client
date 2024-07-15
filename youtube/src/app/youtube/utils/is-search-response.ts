import { VideosResponse } from '../models/response.model'

// TODO: make this more declarative
export const isSearchResponse = (
  data: object,
): data is VideosResponse =>
  'kind' in data &&
  typeof data.kind === 'string' &&
  'etag' in data &&
  typeof data.etag === 'string' &&
  'pageInfo' in data &&
  typeof data.pageInfo === 'object' &&
  'items' in data &&
  Array.isArray(data.items)

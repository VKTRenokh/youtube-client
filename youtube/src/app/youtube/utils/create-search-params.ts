import { maxResults } from '../constants/max-results.constant'

export const createSearchParams = (
  search: string,
  pageToken: string,
) => ({
  type: 'video',
  part: 'snippet',
  maxResults,
  q: search,
  pageToken,
})

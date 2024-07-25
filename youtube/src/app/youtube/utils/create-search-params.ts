import { maxResults } from '../constants/max-results.constant'

export const createSearchParams = (search: string) => ({
  type: 'video',
  part: 'snippet',
  maxResults: maxResults,
  q: search,
})

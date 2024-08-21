import { isSearchResponse } from './is-search-response'

export const validateSearchResponse = (data: object) => {
  if (!isSearchResponse(data)) {
    throw new Error('Invalid data.')
  }

  return data
}

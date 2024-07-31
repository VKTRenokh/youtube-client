import { PageTokens } from '../../youtube/models/response.model'

export const extractPageTokens = (tokens: PageTokens) => ({
  prevPage: tokens.prevPageToken,
  nextPage: tokens.nextPageToken,
})

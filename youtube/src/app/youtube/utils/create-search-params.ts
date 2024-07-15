export const createSearchParams = (search: string) => ({
  type: 'video',
  part: 'snippet',
  maxResults: 15,
  q: search,
})

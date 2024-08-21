import { VideosResponse } from '../../youtube/models/response.model'

export const extractItems = (response: VideosResponse) =>
  response.items

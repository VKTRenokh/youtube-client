import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { createSearchParams } from '../../utils/create-search-params'
import {
  SearchResponse,
  VideosResponse,
} from '../../models/response.model'

@Injectable({
  providedIn: 'root',
})
export class VideosHttpService {
  private http = inject(HttpClient)

  public getVideosWithStatistics(ids: string[]) {
    return this.http.get<VideosResponse>('/videos', {
      // TODO: remove inconsistency here.
      params: {
        part: 'snippet,statistics',
        id: ids,
      },
    })
  }

  public search(search: string, pageToken: string) {
    return this.http.get<SearchResponse>('/search', {
      params: createSearchParams(search, pageToken),
    })
  }
}

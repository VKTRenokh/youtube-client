import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { createSearchParams } from '../../utils/create-search-params'
import { VideosResponse } from '../../models/response.model'

@Injectable({
  providedIn: 'root',
})
export class VideosHttpService {
  private http = inject(HttpClient)

  public getVideosWithStatistics(ids: string[]) {
    return this.http.get<VideosResponse>('/videos', {
      params: {
        part: 'snippet,statistics',
        id: ids.join(','),
      },
    })
  }

  public search(search: string) {
    return this.http.get<VideosResponse>('/search', {
      params: createSearchParams(search),
    })
  }
}

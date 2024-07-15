import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { createSearchParams } from '../../utils/create-search-params'

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient)

  public getWithStatistics(ids: string[]) {
    return this.http.get('/videos', {
      params: {
        part: 'snippet,statistics',
        id: ids.join(','),
      },
    })
  }

  public search(search: string) {
    return this.http.get('/search', {
      params: createSearchParams(search),
    })
  }
}

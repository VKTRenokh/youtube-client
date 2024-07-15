import { Injectable, inject, signal } from '@angular/core'
import videosMock from '../../mock/response.json'
import { VideosResponse } from '../../models/response.model'
import { HttpClient } from '@angular/common/http'
import { map, tap } from 'rxjs'
import { validateSearchResponse } from '../../utils/validate-search-response'
import { createSearchParams } from '../../utils/create-search-params'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private http = inject(HttpClient)

  private videos = signal<VideosResponse | null>(null)
  private didSearch = signal(false)

  public data = this.videos.asReadonly()

  public search(search: string) {
    return this.http
      .get('/search', {
        params: createSearchParams(search),
      })
      .pipe(
        map(validateSearchResponse),
        tap(response => {
          this.didSearch.set(true)
          this.videos.set(response)
        }),
      )
  }

  public getDidSearch() {
    return this.didSearch.asReadonly()
  }

  public getVideoById(id: string) {
    const videos = this.videos() ?? videosMock

    return videos.items.find(video => video.id === id)
  }
}

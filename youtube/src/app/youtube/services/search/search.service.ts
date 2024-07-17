import { Injectable, inject, signal } from '@angular/core'
import { VideosResponse } from '../../models/response.model'
import { map, switchMap, tap } from 'rxjs'
import { validateSearchResponse } from '../../utils/validate-search-response'
import { HttpService } from '../http/http.service'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private http = inject(HttpService)

  private videos = signal<VideosResponse | null>(null)
  private didSearch = signal(false)

  public data = this.videos.asReadonly()

  public search(search: string) {
    return this.http.search(search).pipe(
      map(validateSearchResponse),
      map(response =>
        response.items.map(item => item.id.videoId),
      ),
      switchMap(ids =>
        this.http.getVideosWithStatistics(ids),
      ),
      map(validateSearchResponse),
      tap(value => {
        this.didSearch.set(true)
        this.videos.set(value)
      }),
    )
  }

  public getDidSearch() {
    return this.didSearch.asReadonly()
  }

  public getVideoById(id: string) {
    return this.http.getVideosWithStatistics([id]).pipe(
      map(validateSearchResponse),
      map(videos => videos.items.at(0)),
    )
  }
}

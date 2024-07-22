import { Injectable, inject, signal } from '@angular/core'
import { VideosResponse } from '../../models/response.model'
import { map, switchMap, tap } from 'rxjs'
import { VideosHttpService } from '../videos-http/videos-http.service'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private http = inject(VideosHttpService)

  private videos = signal<VideosResponse | null>(null)

  public data = this.videos.asReadonly()

  public search(search: string) {
    return this.http.search(search).pipe(
      map(response =>
        response.items.map(item => item.id.videoId),
      ),
      switchMap(ids =>
        this.http.getVideosWithStatistics(ids),
      ),
      tap(value => {
        this.videos.set(value)
      }),
    )
  }

  public getVideoById(id: string) {
    return this.http
      .getVideosWithStatistics([id])
      .pipe(map(videos => videos.items.at(0)))
  }
}

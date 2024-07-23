import { Injectable, inject } from '@angular/core'
import { map, switchMap } from 'rxjs'
import { VideosHttpService } from '../videos-http/videos-http.service'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private http = inject(VideosHttpService)

  public search(search: string) {
    return this.http.search(search).pipe(
      map(response =>
        response.items.map(item => item.id.videoId),
      ),
      switchMap(ids =>
        this.http.getVideosWithStatistics(ids),
      ),
    )
  }

  public getVideoById(id: string) {
    return this.http
      .getVideosWithStatistics([id])
      .pipe(map(videos => videos.items.at(0)))
  }
}

import { Injectable, inject } from '@angular/core'
import { Observable, map, switchMap } from 'rxjs'
import { VideosHttpService } from '../videos-http/videos-http.service'
import { VideosResponse } from '../../models/response.model'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private http = inject(VideosHttpService)

  public search(
    search: string,
  ): Observable<VideosResponse> {
    return this.http.search(search).pipe(
      map(response => ({
        ids: response.items.map(item => item.id.videoId),
        nextPageToken: response.nextPageToken,
        prevPageToken: response.prevPageToken,
      })),
      switchMap(({ ids, nextPageToken, prevPageToken }) =>
        this.http.getVideosWithStatistics(ids).pipe(
          map(videos => ({
            ...videos,
            nextPageToken,
            prevPageToken,
          })),
        ),
      ),
    )
  }

  public getVideoById(id: string) {
    return this.http
      .getVideosWithStatistics([id])
      .pipe(map(videos => videos.items.at(0)))
  }
}

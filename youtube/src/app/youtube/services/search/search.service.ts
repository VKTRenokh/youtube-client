import { Injectable, inject } from '@angular/core'
import { Observable, map, switchMap } from 'rxjs'
import { VideosHttpService } from '../videos-http/videos-http.service'
import { VideosResponse } from '../../models/response.model'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private http = inject(VideosHttpService)

  private combineResults(
    nextPageToken: string | null,
    prevPageToken: string | null,
  ) {
    return (videos: VideosResponse) => ({
      ...videos,
      nextPageToken,
      prevPageToken,
    })
  }

  private fetchSearchResults(
    search: string,
    pageToken: string,
  ) {
    return this.http.search(search, pageToken).pipe(
      map(response => ({
        ids: response.items.map(item => item.id.videoId),
        nextPageToken: response.nextPageToken,
        prevPageToken: response.prevPageToken,
      })),
    )
  }

  private getStatistics(ids: string[]) {
    return this.http.getVideosWithStatistics(ids)
  }

  public search(
    search: string,
    pageToken = '',
  ): Observable<VideosResponse> {
    return this.fetchSearchResults(search, pageToken).pipe(
      switchMap(({ ids, nextPageToken, prevPageToken }) =>
        this.getStatistics(ids).pipe(
          map(
            this.combineResults(
              nextPageToken,
              prevPageToken,
            ),
          ),
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

import { Injectable, signal } from '@angular/core'
import videosMock from '../../mock/response.json'
import { VideosResponse } from '../../interfaces/response'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public didSearch = false
  private videos = signal<VideosResponse | null>(null)

  public search() {
    this.didSearch = true

    this.videos.set(videosMock)
  }

  public getVideos() {
    return this.videos.asReadonly()
  }
}

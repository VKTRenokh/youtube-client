import { Injectable, signal } from '@angular/core'
import videosMock from '../../mock/response.json'
import { VideosResponse } from '../../interfaces/response'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public didSearch = false
  private videos = signal<VideosResponse | null>(null)
  public data = this.videos.asReadonly()

  public search() {
    this.didSearch = true

    this.videos.set(videosMock)
  }
}

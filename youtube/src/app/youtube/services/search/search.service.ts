import { Injectable, signal } from '@angular/core'
import videosMock from '../../mock/response.json'
import { VideosResponse } from '../../models/response.model'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private videos = signal<VideosResponse | null>(null)

  private didSearch = signal(false)

  public data = this.videos.asReadonly()

  public search() {
    this.didSearch.set(true)

    this.videos.set(videosMock)
  }

  public getDidSearch() {
    return this.didSearch.asReadonly()
  }
}

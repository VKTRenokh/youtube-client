import { Injectable, inject, signal } from '@angular/core'
import videosMock from '../../mock/response.json'
import { VideosResponse } from '../../models/response.model'
import { LOGGER_TOKEN } from '../../../core/services/logger/logger.service'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private videos = signal<VideosResponse | null>(null)
  public data = this.videos.asReadonly()
  private logger = inject(LOGGER_TOKEN)

  private didSearch = signal(false)

  public search() {
    this.didSearch.set(true)

    this.videos.set(videosMock)

    this.logger.log('search')
  }

  public getDidSearch() {
    return this.didSearch.asReadonly()
  }

  public getVideoById(id: string) {
    const videos = this.videos() ?? videosMock

    return videos.items.find((video) => video.id === id)
  }
}

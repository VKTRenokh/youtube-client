import { Injectable, inject, signal } from '@angular/core'
import videosMock from '../../mock/response.json'
import { VideosResponse } from '../../models/response.model'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private http = inject(HttpClient)

  private videos = signal<VideosResponse | null>(null)
  private didSearch = signal(false)

  public data = this.videos.asReadonly()

  public search() {
    this.didSearch.set(true)

    this.videos.set(videosMock)

    this.http.get('/').subscribe(console.log)
  }

  public getDidSearch() {
    return this.didSearch.asReadonly()
  }

  public getVideoById(id: string) {
    const videos = this.videos() ?? videosMock

    return videos.items.find(video => video.id === id)
  }
}

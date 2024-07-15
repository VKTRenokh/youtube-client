import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { createSearchParams } from '../../utils/create-search-params'

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient)

  public getVideos(search: string) {
    return this.http.get('/videos', {
      params: createSearchParams(search),
    })
  }
}

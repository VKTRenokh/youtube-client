import { Injectable, signal } from '@angular/core'
import videosMock from '../../mock/response.json'
import { not } from '../../../utils/not'
import { VideosResponse } from '../../models/response.model'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private videos = signal<VideosResponse | null>(null)
  private _isFilteringShown = signal(false)

  private didSearch = signal(false)

  public data = this.videos.asReadonly()
  public isFilteringShown =
    this._isFilteringShown.asReadonly()

  public search() {
    this.didSearch.set(true)

    this.videos.set(videosMock)
  }

  public toggleFilteringShown() {
    this._isFilteringShown.update(not)
  }

  public getDidSearch() {
    return this.didSearch.asReadonly()
  }
}

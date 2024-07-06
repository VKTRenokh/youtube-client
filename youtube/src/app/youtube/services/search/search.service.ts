import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public didSearch = false

  public search() {
    this.didSearch = true
  }
}

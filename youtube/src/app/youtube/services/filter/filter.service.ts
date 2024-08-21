import { Injectable, signal } from '@angular/core'
import { not } from '../../../utils/not'

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private isFilteringShown = signal(false)

  public getIsFilteringShown() {
    return this.isFilteringShown.asReadonly()
  }

  public toggleIsFilteringShown() {
    return this.isFilteringShown.update(not)
  }
}

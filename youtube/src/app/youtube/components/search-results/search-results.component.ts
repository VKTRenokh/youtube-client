import { Component, inject, signal } from '@angular/core'
import { SearchItemComponent } from '../search-item/search-item.component'
import { FilteringCriteriaComponent } from '../filtering-criteria/filtering-criteria.component'
import { SortOptions } from '../../../shared/models/sort-options.model'
import { SortPipe } from '../../pipes/sort/sort.pipe'
import { WordPipe } from '../../pipes/word/word.pipe'
import { FilterService } from '../../services/filter/filter.service'
import { Store, select } from '@ngrx/store'
import { Observable, filter, map } from 'rxjs'
import { isNotNullable } from '../../../shared/utils/is-not-nullable'
import { VideoItem } from '../../models/response.model'
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'yt-search-results',
  standalone: true,
  imports: [
    SearchItemComponent,
    FilteringCriteriaComponent,
    WordPipe,
    SortPipe,
    AsyncPipe,
  ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent {
  private filterService = inject(FilterService)
  private store = inject(Store)

  public currentCriteria = signal<SortOptions | null>(null)
  public currentWord = signal<string>('')
  public isFilteringShown =
    this.filterService.getIsFilteringShown()

  public videos: Observable<VideoItem[]> = this.store.pipe(
    select(state => state.youtube.data),
    filter(isNotNullable),
    map(data => data.items),
  )

  public updateSortingCriteria(newCriteria: SortOptions) {
    this.currentCriteria.set(newCriteria)
  }

  public updateByWordFilter(newWord: string) {
    this.currentWord.set(newWord)
  }
}

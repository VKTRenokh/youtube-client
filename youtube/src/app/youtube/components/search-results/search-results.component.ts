import {
  Component,
  computed,
  inject,
  signal,
} from '@angular/core'
import { SearchService } from '../../services/search/search.service'
import { SearchItemComponent } from '../search-item/search-item.component'
import { FilteringCriteriaComponent } from '../filtering-criteria/filtering-criteria.component'
import { SortOptions } from '../../../shared/models/sort-options.model'
import { SortPipe } from '../../pipes/sort/sort.pipe'
import { WordPipe } from '../../pipes/word/word.pipe'

@Component({
  selector: 'yt-search-results',
  standalone: true,
  imports: [
    SearchItemComponent,
    FilteringCriteriaComponent,
    WordPipe,
    SortPipe,
  ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent {
  private searchService = inject(SearchService)

  public currentCriteria = signal<SortOptions | null>(null)
  public currentWord = signal<string>('')
  public isFilteringShown =
    this.searchService.isFilteringShown
  public didSearch = this.searchService.didSearch
  public videos = computed(() => {
    const data = this.searchService.data()

    if (!data) {
      return null
    }

    return data.items
  })

  public updateSortingCriteria(newCriteria: SortOptions) {
    this.currentCriteria.set(newCriteria)
  }

  public updateByWordFilter(newWord: string) {
    this.currentWord.set(newWord)
  }
}

import { Component, computed, inject } from '@angular/core'
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

  public currentCriteria: SortOptions | null = null
  public currentWord = ''
  public isFilteringShown =
    this.searchService.isFilteringShown
  public videos = computed(() => {
    const data = this.searchService.data()

    if (!data) {
      return null
    }

    return data.items
  })

  public didSearch() {
    return this.searchService.didSearch
  }

  public updateSortingCriteria(newCriteria: SortOptions) {
    this.currentCriteria = newCriteria
  }

  public updateByWordFilter(newWord: string) {
    this.currentWord = newWord
  }
}

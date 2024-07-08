import { Component, computed, inject } from '@angular/core'
import { SearchService } from '../../services/search/search.service'
import { SearchItemComponent } from '../search-item/search-item.component'
import { FilteringCriteriaComponent } from '../filtering-criteria/filtering-criteria.component'

@Component({
  selector: 'yt-search-results',
  standalone: true,
  imports: [
    SearchItemComponent,
    FilteringCriteriaComponent,
  ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent {
  private searchService = inject(SearchService)

  public filteringCriteria = [
    'date asc',
    'date desc',
    'view asc',
    'view desc',
  ]
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
}

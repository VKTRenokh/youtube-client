import { Component, inject } from '@angular/core'
import { SearchService } from '../../services/search/search.service'

@Component({
  selector: 'yt-search-results',
  standalone: true,
  imports: [],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent {
  private searchService = inject(SearchService)

  public getDidSearch() {
    return this.searchService.didSearch
  }
}

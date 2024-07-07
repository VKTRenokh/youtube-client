import {
  Component,
  Injector,
  OnInit,
  computed,
  effect,
  inject,
} from '@angular/core'
import { SearchService } from '../../services/search/search.service'
import { SearchItemComponent } from '../search-item/search-item.component'

@Component({
  selector: 'yt-search-results',
  standalone: true,
  imports: [SearchItemComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent implements OnInit {
  private searchService = inject(SearchService)
  private injector = inject(Injector)
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

  public ngOnInit(): void {
    effect(
      () => {
        console.log(this.searchService.data())
      },
      { injector: this.injector },
    )
  }
}

import {
  Component,
  Injector,
  OnInit,
  effect,
  inject,
} from '@angular/core'
import { SearchService } from '../../services/search/search.service'

@Component({
  selector: 'yt-search-results',
  standalone: true,
  imports: [],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent implements OnInit {
  private searchService = inject(SearchService)
  private injector = inject(Injector)

  public getDidSearch() {
    return this.searchService.didSearch
  }

  public ngOnInit(): void {
    effect(
      () => {
        console.log(this.searchService.getVideos()())
      },
      { injector: this.injector },
    )
  }
}

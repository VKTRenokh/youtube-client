import { Component, inject, signal } from '@angular/core'
import { SearchItemComponent } from '../search-item/search-item.component'
import { FilteringCriteriaComponent } from '../filtering-criteria/filtering-criteria.component'
import { SortOptions } from '../../../shared/models/sort-options.model'
import { SortPipe } from '../../pipes/sort/sort.pipe'
import { WordPipe } from '../../pipes/word/word.pipe'
import { FilterService } from '../../services/filter/filter.service'
import { Store, select } from '@ngrx/store'
import { Observable, filter, map, switchMap } from 'rxjs'
import { isNotNullable } from '../../../shared/utils/is-not-nullable'
import { VideoItem } from '../../models/response.model'
import { AsyncPipe } from '@angular/common'
import { CustomSearchItemComponent } from '../custom-search-item/custom-search-item.component'
import {
  CustomCard,
  isCustomCard,
} from '../../../admin/models/custom-card.model'
import { YoutubeActions } from '../../../state/actions/youtube.actions'
import { State } from '../../../state/reducers/youtube.reducer'
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component'
import { FavoriteButtonComponent } from '../../../shared/components/favorite-button/favorite-button.component'

@Component({
  selector: 'yt-search-results',
  standalone: true,
  imports: [
    SearchItemComponent,
    PaginationComponent,
    CustomSearchItemComponent,
    FilteringCriteriaComponent,
    FavoriteButtonComponent,
    WordPipe,
    SortPipe,
    AsyncPipe,
  ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent {
  private filterService = inject(FilterService)
  private store: Store<{ youtube: State }> = inject(Store)
  private customCards = this.store.pipe(
    select(state => state.youtube.customCards),
  )

  public isLoading = this.store.select('youtube', 'loading')
  public currentCriteria = signal<SortOptions | null>(null)
  public currentWord = signal<string>('')
  public isFilteringShown =
    this.filterService.getIsFilteringShown()

  public videos: Observable<(VideoItem | CustomCard)[]> =
    this.store.pipe(
      select(state => state.youtube.data),
      filter(isNotNullable),
      switchMap(items =>
        this.customCards.pipe(
          map(customCards => [...customCards, ...items]),
        ),
      ),
    )

  public updateSortingCriteria(newCriteria: SortOptions) {
    this.currentCriteria.set(newCriteria)
  }

  public updateByWordFilter(newWord: string) {
    this.currentWord.set(newWord)
  }

  public isCustomCard(card: unknown): card is CustomCard {
    return isCustomCard(card)
  }

  public nextPage() {
    this.store.dispatch(YoutubeActions.nextPage())
  }

  public prevPage() {
    this.store.dispatch(YoutubeActions.prevPage())
  }
}

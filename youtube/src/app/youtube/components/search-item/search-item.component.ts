import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  computed,
  inject,
  input,
  signal,
} from '@angular/core'
import {
  AsyncPipe,
  NgOptimizedImage,
} from '@angular/common'
import { ButtonComponent } from '../../../shared/components/button/button.component'
import { ColoredBorderDirective } from '../../directives/colored-border.directive'
import { VideoItem } from '../../models/response.model'
import { Router } from '@angular/router'
import { VideoStatisticsComponent } from '../video-statistics/video-statistics.component'
import { Store } from '@ngrx/store'
import { FavoriteActions } from '../../../state/actions/favorite.actions'
import { selectFavoriteIds } from '../../../state/selectors/favorite.selector'
import { map, tap } from 'rxjs'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
  selector: 'yt-search-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ButtonComponent,
    ColoredBorderDirective,
    VideoStatisticsComponent,
    AsyncPipe,
  ],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent implements OnInit {
  private router = inject(Router)
  private store = inject(Store)
  private ids = this.store.select(selectFavoriteIds)
  private destroyRef = inject(DestroyRef)

  public isFavorite = signal(false)
  public item = input.required<VideoItem>()

  public snippet = computed(() => this.item().snippet)
  public smallThumbnail = computed(
    () => this.snippet().thumbnails.default,
  )

  public navigateToDetailedPage() {
    this.router.navigate(['/video', this.item().id])
  }

  private addToFavorites() {
    this.store.dispatch(
      FavoriteActions.add({ id: this.item().id }),
    )
  }

  private removeFromFavorites() {
    this.store.dispatch(
      FavoriteActions.remove({ id: this.item().id }),
    )
  }

  public toggleFavorite() {
    return this.isFavorite()
      ? this.removeFromFavorites()
      : this.addToFavorites()
  }

  public ngOnInit(): void {
    this.ids
      .pipe(
        map(ids => ids.includes(this.item().id)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(isFavorite =>
        this.isFavorite.set(isFavorite),
      )
  }
}

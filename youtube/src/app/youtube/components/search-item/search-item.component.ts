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
import { map } from 'rxjs'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { FavoriteButtonComponent } from '../../../shared/components/favorite-button/favorite-button.component'

@Component({
  selector: 'yt-search-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ButtonComponent,
    ColoredBorderDirective,
    FavoriteButtonComponent,
    VideoStatisticsComponent,
    AsyncPipe,
  ],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent {
  private router = inject(Router)

  public isFavorite = signal(false)
  public item = input.required<VideoItem>()
  public id = computed(() => this.item().id)

  public snippet = computed(() => this.item().snippet)
  public smallThumbnail = computed(
    () => this.snippet().thumbnails.default,
  )

  public navigateToDetailedPage() {
    this.router.navigate(['/video', this.id()])
  }
}

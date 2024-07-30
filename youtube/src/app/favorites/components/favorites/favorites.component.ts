import { AsyncPipe } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core'
import { Store } from '@ngrx/store'
import { selectFavoriteVideos } from '../../../state/selectors/favorite.selector'
import { SearchItemComponent } from '../../../youtube/components/search-item/search-item.component'

@Component({
  selector: 'yt-favorites',
  standalone: true,
  imports: [AsyncPipe, SearchItemComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent {
  private store = inject(Store)
  public videos = this.store.select(selectFavoriteVideos)
}

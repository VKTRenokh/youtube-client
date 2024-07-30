import { AsyncPipe } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core'
import { Store } from '@ngrx/store'
import { selectFavoriteIds } from '../../../state/selectors/favorite.selector'

@Component({
  selector: 'yt-favorites',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent {
  private store = inject(Store)
  public favorites = this.store.select(selectFavoriteIds)
}

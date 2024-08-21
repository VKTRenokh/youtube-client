import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core'
import { ButtonComponent } from '../button/button.component'
import { Store } from '@ngrx/store'
import { selectFavoriteIds } from '../../../state/selectors/favorite.selector'
import { toSignal } from '@angular/core/rxjs-interop'
import { FavoriteActions } from '../../../state/actions/favorite.actions'

@Component({
  selector: 'yt-favorite-button',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './favorite-button.component.html',
  styleUrl: './favorite-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteButtonComponent {
  private store = inject(Store)
  public ids = toSignal(
    this.store.select(selectFavoriteIds),
  )

  public id = input.required<string>()

  public isFavorite = computed(() => {
    const ids = this.ids()

    if (!ids) {
      return false
    }

    return ids.includes(this.id())
  })

  public getIdAsObject() {
    return { id: this.id() }
  }

  public removeFromFavorites() {
    this.store.dispatch(
      FavoriteActions.remove(this.getIdAsObject()),
    )
  }

  public addToFavorites() {
    this.store.dispatch(
      FavoriteActions.add(this.getIdAsObject()),
    )
  }

  public toggleFavorite() {
    return this.isFavorite()
      ? this.removeFromFavorites()
      : this.addToFavorites()
  }
}

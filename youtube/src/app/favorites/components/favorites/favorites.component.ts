import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core'

@Component({
  selector: 'yt-favorites',
  standalone: true,
  imports: [],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent {}

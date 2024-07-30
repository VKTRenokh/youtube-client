import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core'
import { ButtonComponent } from '../button/button.component'

@Component({
  selector: 'yt-favorite-button',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './favorite-button.component.html',
  styleUrl: './favorite-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteButtonComponent {
  public favorite = output()
  public isFavorite = input()
}

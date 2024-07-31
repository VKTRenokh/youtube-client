import {
  ChangeDetectionStrategy,
  Component,
  output,
} from '@angular/core'
import { ButtonComponent } from '../button/button.component'

@Component({
  selector: 'yt-pagination',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  public prev = output()
  public next = output()
}

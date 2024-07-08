import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core'
import { ButtonComponent } from '../../../shared/components/button/button.component'

@Component({
  selector: 'yt-filtering-criteria',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './filtering-criteria.component.html',
  styleUrl: './filtering-criteria.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilteringCriteriaComponent {
  public filteringCriteria = [
    'date asc',
    'date desc',
    'views asc',
    'views desc',
  ]
}

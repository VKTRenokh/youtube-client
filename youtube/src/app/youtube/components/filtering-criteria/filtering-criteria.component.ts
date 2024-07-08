import {
  ChangeDetectionStrategy,
  Component,
  output,
} from '@angular/core'
import { ButtonComponent } from '../../../shared/components/button/button.component'
import { SortOptions } from '../../../shared/models/sort-options.model'

@Component({
  selector: 'yt-filtering-criteria',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './filtering-criteria.component.html',
  styleUrl: './filtering-criteria.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilteringCriteriaComponent {
  public onCriteriaUpdate = output<SortOptions>()

  public criterias: SortOptions[] = [
    {
      criteria: 'date',
      direction: 1,
    },
    {
      criteria: 'date',
      direction: -1,
    },
    {
      criteria: 'views',
      direction: 1,
    },
    {
      criteria: 'views',
      direction: -1,
    },
  ]

  public onCriteriaClick(criteria: SortOptions) {
    this.onCriteriaUpdate.emit(criteria)
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  output,
} from '@angular/core'
import { ButtonComponent } from '../../../shared/components/button/button.component'
import {
  Directions,
  SortOptions,
} from '../../../shared/models/sort-options.model'

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
      direction: Directions.Ascending,
    },
    {
      criteria: 'date',
      direction: Directions.Descending,
    },
    {
      criteria: 'views',
      direction: Directions.Ascending,
    },
    {
      criteria: 'views',
      direction: Directions.Descending,
    },
  ]

  public onCriteriaClick(criteria: SortOptions) {
    this.onCriteriaUpdate.emit(criteria)
  }
}

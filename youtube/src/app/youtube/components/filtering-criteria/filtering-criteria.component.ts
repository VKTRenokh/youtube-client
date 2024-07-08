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
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'yt-filtering-criteria',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './filtering-criteria.component.html',
  styleUrl: './filtering-criteria.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilteringCriteriaComponent {
  public onCriteriaUpdate = output<SortOptions>()
  public onByWordUpdate = output<string>()

  public word = ''

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
    console.log('criteria')
    this.onCriteriaUpdate.emit(criteria)
  }

  public onChange() {
    this.onByWordUpdate.emit(this.word)
  }
}

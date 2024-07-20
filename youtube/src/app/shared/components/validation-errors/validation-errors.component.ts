import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  input,
} from '@angular/core'
import { AbstractControl } from '@angular/forms'
import {
  Observable,
  distinctUntilChanged,
  filter,
  map,
  tap,
} from 'rxjs'
import { isNotNullable } from '../../utils/is-not-nullable'
import { AsyncPipe } from '@angular/common'
import { arrayEqual } from '../../utils/array-equal'

@Component({
  selector: 'yt-validation-errors',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './validation-errors.component.html',
  styleUrl: './validation-errors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidationErrorsComponent implements OnInit {
  public control = input.required<AbstractControl>()
  public errorConversions = input<Map<string, string>>()

  public convertedErrors!: Observable<string[]>

  public ngOnInit(): void {
    this.convertedErrors = this.control().valueChanges.pipe(
      map(() => this.control().errors),
      distinctUntilChanged((prev, next) =>
        prev && next
          ? arrayEqual(Object.keys(prev), Object.keys(next))
          : false,
      ),
      map(errors => errors || {}),
      map(errors =>
        Object.keys(errors).map(
          error =>
            this.errorConversions()?.get(error) ?? error,
        ),
      ),
    )
  }
}

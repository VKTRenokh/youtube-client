import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core'
import {
  ControlValueAccessor,
  NgControl,
  ValidationErrors,
} from '@angular/forms'
import { CUSTOM_ERRORS } from '../../tokens/custom-errors.token'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
  selector: 'yt-validation-errors',
  standalone: true,
  imports: [],
  templateUrl: './validation-errors.component.html',
  styleUrl: './validation-errors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidationErrorsComponent
  implements ControlValueAccessor, OnInit
{
  private control = inject(NgControl, { self: true })
  private destroyRef = inject(DestroyRef, { self: true })

  public customErrors = inject(CUSTOM_ERRORS)
  public validationError = signal<string | null>('')

  public constructor() {
    this.control.valueAccessor = this
  }

  public shouldShowErrors() {
    return (
      this.control.invalid &&
      this.control.dirty &&
      this.control.touched &&
      this.control.errors
    )
  }

  public getCustomErrors(errors: ValidationErrors) {
    return this.customErrors.get(Object.keys(errors)[0])
  }

  public ngOnInit(): void {
    this.control.control?.events
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        if (
          !this.shouldShowErrors() ||
          !this.control.errors
        ) {
          return
        }

        const error = this.getCustomErrors(
          this.control.errors,
        )

        if (!error) {
          return
        }

        this.validationError.set(error)
      })
  }

  public writeValue(): void {
    return
  }

  public registerOnChange(): void {
    return
  }

  public registerOnTouched(): void {
    return
  }
}

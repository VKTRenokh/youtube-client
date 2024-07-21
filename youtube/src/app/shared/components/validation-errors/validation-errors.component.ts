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
  StatusChangeEvent,
  ValidationErrors,
} from '@angular/forms'
import { CUSTOM_ERRORS } from '../../tokens/custom-errors.token'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { filter, tap } from 'rxjs'

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
      this.control.errors
    )
  }

  public getCustomErrors() {
    return this.customErrors.get(
      Object.keys(this.control.errors ?? {})[0],
    )
  }

  public updateErrors() {
    if (!this.shouldShowErrors()) {
      return
    }

    const error = this.getCustomErrors()

    if (!error) {
      return
    }

    this.validationError.set(error)
  }

  public ngOnInit(): void {
    this.control.control?.events
      .pipe(
        tap(console.log),
        filter(event => event instanceof StatusChangeEvent),
        tap(console.log),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        this.updateErrors()
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

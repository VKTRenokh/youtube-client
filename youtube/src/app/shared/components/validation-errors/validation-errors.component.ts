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
  ValueChangeEvent,
} from '@angular/forms'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { filter } from 'rxjs'
import { CUSTOM_ERRORS } from '../../tokens/custom-errors.token'

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
  public validationError = signal<string | undefined>('')

  public constructor() {
    this.control.valueAccessor = this
  }

  public get errorsKeys() {
    return Object.keys(this.control.errors ?? {})
  }

  public shouldShowErrors() {
    return this.control.dirty
  }

  public getCustomError() {
    return this.customErrors.get(this.errorsKeys[0])
  }

  public updateErrors() {
    if (!this.shouldShowErrors()) {
      return
    }

    this.validationError.set(this.getCustomError())
  }

  public ngOnInit(): void {
    this.control.control?.events
      .pipe(
        filter(
          event =>
            event instanceof StatusChangeEvent ||
            event instanceof ValueChangeEvent,
        ),
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

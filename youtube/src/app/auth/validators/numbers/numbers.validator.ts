import { AbstractControl } from '@angular/forms'

const hasNumbers = (string: string) => /[0-9]/.test(string)

export const numbersValidator = (
  control: AbstractControl,
) =>
  hasNumbers(control.value)
    ? null
    : { numbers: { value: control.value } }

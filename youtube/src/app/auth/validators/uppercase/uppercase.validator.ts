import { AbstractControl } from '@angular/forms'

const hasUppercaseCharacter = (string: string) =>
  /[A-Z]/.test(string)

export const uppercaseValidator = (
  control: AbstractControl,
) =>
  hasUppercaseCharacter(control.value)
    ? null
    : { uppercaseCharacter: { value: control.value } }

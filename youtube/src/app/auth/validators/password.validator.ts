import {
  AbstractControl,
  ValidationErrors,
} from '@angular/forms'
import { isEmptyObject } from '../../shared/utils/is-empty-object'

const hasCharacter = (
  characters: string[],
  string: string,
) =>
  characters.some(character => string.includes(character))

const hasUppercaseCharacter = (string: string) =>
  /[A-Z]/.test(string)

const hasNumbers = (string: string) => /[0-9]/.test(string)

const createValidationErrors = (
  control: AbstractControl,
) => {
  const errors: ValidationErrors = {}

  return {
    get: () => (isEmptyObject(errors) ? null : errors),
    add: (name: string) =>
      (errors[name] = { value: control.value }),
  }
}

export const passwordValidator =
  (requiredCharacters: string[]) =>
  (control: AbstractControl): ValidationErrors | null => {
    const errors = createValidationErrors(control)

    if (!hasCharacter(requiredCharacters, control.value)) {
      errors.add('requiredCharacters')
    }

    if (!hasUppercaseCharacter(control.value)) {
      errors.add('uppercaseCharacter')
    }

    if (!hasNumbers(control.value)) {
      errors.add('numbers')
    }

    return errors.get()
  }

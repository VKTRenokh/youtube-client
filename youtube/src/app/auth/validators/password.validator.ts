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

export const passwordValidator =
  (requiredCharacters: string[]) =>
  (control: AbstractControl): ValidationErrors | null => {
    const errors: ValidationErrors = {}

    if (!hasCharacter(requiredCharacters, control.value)) {
      errors['requiredCharacters'] = {
        value: control.value,
      }
    }

    if (!hasUppercaseCharacter(control.value)) {
      errors['uppercaseCharacter'] = {
        value: control.value,
      }
    }

    return isEmptyObject(errors) ? null : errors
  }

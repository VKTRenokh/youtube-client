import {
  AbstractControl,
  ValidationErrors,
} from '@angular/forms'
import { numbersValidator } from '../numbers/numbers.validator'
import { uppercaseValidator } from '../uppercase/uppercase.validator'
import { requiredCharactersValidator } from '../required-characters/required-characters.validator'

export const RequiredCharacters = 'requiredCharacters'
export const UppercaseCharacter = 'uppercaseCharacter'
export const Numbers = 'numbers'

// TODO: remove code repetion in smaller validators
export const passwordValidator = (
  requiredCharacters: string[],
): ((
  control: AbstractControl,
) => ValidationErrors | null)[] => [
  requiredCharactersValidator(requiredCharacters),
  uppercaseValidator,
  numbersValidator,
]

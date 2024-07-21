import {
  AbstractControl,
  ValidationErrors,
} from '@angular/forms'
import { requiredCharactersValidator } from './required-characters/required-characters.validator'
import { uppercaseValidator } from './uppercase/uppercase.validator'
import { numbersValidator } from './numbers/numbers.validator'

export const RequiredCharacters = 'requiredCharacters'
export const UppercaseCharacter = 'uppercaseCharacter'
export const Numbers = 'numbers'

export const passwordValidator = (
  requiredCharacters: string[],
): ((
  control: AbstractControl,
) => ValidationErrors | null)[] => [
  requiredCharactersValidator(requiredCharacters),
  uppercaseValidator,
  numbersValidator,
]

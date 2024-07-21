import { specialSymbols } from '../constants/symbols.constant'
import {
  Numbers,
  RequiredCharacters,
  UppercaseCharacter,
} from '../validators/password.validator'

export const validationErrors = new Map([
  [
    RequiredCharacters,
    `Password should contain any of the following symbols: ${specialSymbols.join(' ')}`,
  ],
  [
    UppercaseCharacter,
    'Password should contain at least one uppercase character',
  ],
  [Numbers, 'Password should contain at least one number'],
  [
    'minlength',
    'Password length should be at least 8 symbols',
  ],
  ['required', 'This field is required'],
  ['email', 'Email should be valid'],
])

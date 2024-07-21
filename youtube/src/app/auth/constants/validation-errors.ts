import { CustomErrors } from '../../shared/tokens/custom-errors.token'
import { specialSymbols } from '../constants/symbols.constant'

export const validationErrors: CustomErrors = new Map([
  [
    'requiredCharacters',
    `Password should contain any of the following symbols: ${specialSymbols.join(' ')}`,
  ],
  [
    'uppercaseCharacter',
    'Password should contain at least one uppercase character',
  ],
  [
    'numbers',
    'Password should contain at least one number',
  ],
  [
    'minlength',
    'Password length should be at least 8 symbols',
  ],
  ['required', 'This field is required'],
  ['email', 'Email should be valid'],
])

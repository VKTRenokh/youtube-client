import { specialSymbols } from '../constants/symbols.constant'

export const validationErrors = new Map([
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
])

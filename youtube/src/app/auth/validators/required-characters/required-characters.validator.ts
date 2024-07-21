import { AbstractControl } from '@angular/forms'

const hasCharacter = (
  characters: string[],
  string: string,
) =>
  characters.some(character => string.includes(character))

export const requiredCharactersValidator =
  (characters: string[]) => (control: AbstractControl) =>
    hasCharacter(characters, control.value)
      ? null
      : { requiredCharacters: { value: control.value } }

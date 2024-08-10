import { InputSignal, signal } from '@angular/core'

// TODO: REMOVE THIS USELESS THING, ANGULAR PROVIDES
// FIXTURE.COMPONENTREF.SETINPUT
export const inputSignal = <T>(value: T) =>
  signal(value) as unknown as InputSignal<T>

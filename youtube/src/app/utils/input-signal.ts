import { InputSignal, signal } from '@angular/core'

export const inputSignal = <T>(value: T) =>
  signal(value) as unknown as InputSignal<T>

import 'jest-preset-angular/setup-jest'
import { Crypto } from '@peculiar/webcrypto'

Object.defineProperty(globalThis, 'crypto', {
  value: new Crypto(),
})

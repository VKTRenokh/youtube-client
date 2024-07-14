import { Injectable } from '@angular/core'
import { createLoggerWithPrefix } from '../../utils/create-logger-with-prefix'

@Injectable({
  providedIn: 'root',
})
export class DevLoggerService extends createLoggerWithPrefix(
  'DEV',
) {}

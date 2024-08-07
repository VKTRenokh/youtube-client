import { TestBed } from '@angular/core/testing'

import { AuthService } from './auth.service'
import { provideLogger } from '../../../core/providers/logger/logger.provider'

describe('AuthService', () => {
  let service: AuthService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideLogger()],
    })
    service = TestBed.inject(AuthService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})

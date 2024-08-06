import { TestBed } from '@angular/core/testing'

import { StorageService } from './storage.service'

describe('LocalStorageService', () => {
  let service: StorageService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(StorageService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should save things', () => {
    const key = 'alalalallala'
    const value = '10'

    expect(service.get(key)).toBeUndefined()

    service.set(key, value)

    expect(service.get(key)).toBe(value)
  })
})

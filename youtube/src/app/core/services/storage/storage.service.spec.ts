import { TestBed } from '@angular/core/testing'

import { StorageService } from './storage.service'

describe('Storage Service', () => {
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

    expect(service.get(key)).toBeNull()

    service.set(key, value)

    expect(service.get(key)).toBe(value)
  })

  it('should remove things', () => {
    const key = 'adfsadf'
    const value = 'asfasdf'

    const getValue = () => service.get(key)

    service.set(key, value)
    expect(getValue()).toBe(value)

    service.remove(key)
    expect(getValue()).toBeFalsy()
  })
})

import { TestBed } from '@angular/core/testing'

import { FilterService } from './filter.service'

describe('FilterService', () => {
  let service: FilterService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(FilterService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('signal value should be changed when toggleIsFilteringShown called', () => {
    const isFilteringShown = service.getIsFilteringShown()

    expect(isFilteringShown()).toBe(false)

    service.toggleIsFilteringShown()

    expect(isFilteringShown()).toBe(true)
  })
})

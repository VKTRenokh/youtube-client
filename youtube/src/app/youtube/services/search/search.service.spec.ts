import { TestBed } from '@angular/core/testing'
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing'

import { SearchService } from './search.service'
import { provideHttpClient } from '@angular/common/http'

describe('SearchService', () => {
  let service: SearchService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    })
    service = TestBed.inject(SearchService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should search', () => {
    const testingController = TestBed.inject(
      HttpTestingController,
    )

    service.search('How to test angular in depth')

    const req = testingController.expectOne(
      '/search',
      'Request to search videos',
    )

    req.flush([])
  })
})

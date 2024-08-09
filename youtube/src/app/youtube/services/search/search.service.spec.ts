import { TestBed } from '@angular/core/testing'
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing'

import { SearchService } from './search.service'
import { provideHttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs'

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

  it('should search', async () => {
    const search = 'How to test angular application'

    const testingController = TestBed.inject(
      HttpTestingController,
    )

    const searchRequest = firstValueFrom(
      service.search(search),
    )

    const req = testingController.expectOne(
      req =>
        req.url === '/search' &&
        req.params.get('q') === search,
    )

    req.flush({})

    expect(await searchRequest).toBeTruthy()
  }, 10000)
})

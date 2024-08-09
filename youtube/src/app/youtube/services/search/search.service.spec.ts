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
    const query = 'How to test angular application'

    const testingController = TestBed.inject(
      HttpTestingController,
    )

    const search = firstValueFrom(service.search(query))

    const searchReq = testingController.expectOne(
      req =>
        req.url === '/search' &&
        req.params.get('q') === query,
    )

    const videoId = 'hjkl'

    searchReq.flush({
      items: [{ id: { videoId } }],
    })

    const videosReq = testingController.expectOne(
      req =>
        req.url === '/videos' &&
        req.params.get('id') === videoId,
    )

    videosReq.flush({
      items: [{ id: videoId, statistics: {} }],
    })

    const response = await search
    expect(response.items[0].id).toBe(videoId)
    expect(response.items[0].statistics).toBeTruthy()
  })
})

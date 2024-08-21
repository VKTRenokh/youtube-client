import { TestBed } from '@angular/core/testing'
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing'

import { SearchService } from './search.service'
import { provideHttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs'
import { isGet } from '../../../utils/is-get'

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

  it('should correctly get video by id', async () => {
    const id = 'id2135'

    const testingController = TestBed.inject(
      HttpTestingController,
    )

    const video = firstValueFrom(service.getVideoById(id))

    const req = testingController.expectOne(
      req =>
        req.url === '/videos' &&
        req.params.has('id') &&
        isGet(req),
    )

    req.flush({ items: [{ id }, { id: '134' }] })

    const response = await video

    expect(response).toBeTruthy()
    expect(response!.id).toBe(id)
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
        req.params.get('id') === videoId &&
        isGet(req),
    )

    videosReq.flush({
      items: [{ id: videoId, statistics: {} }],
    })

    const response = await search
    expect(response.items[0].id).toBe(videoId)
    expect(response.items[0].statistics).toBeTruthy()
  })
})

import { TestBed } from '@angular/core/testing'

import { VideosHttpService } from './videos-http.service'
import { provideHttpClient } from '@angular/common/http'
import { provideHttpClientTesting } from '@angular/common/http/testing'

describe('VideosHttpService', () => {
  let service: VideosHttpService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    })

    service = TestBed.inject(VideosHttpService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})

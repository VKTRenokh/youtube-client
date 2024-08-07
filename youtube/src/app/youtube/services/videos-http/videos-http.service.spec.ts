import { TestBed } from '@angular/core/testing'

import { VideosHttpService } from './videos-http.service'

describe('VideosHttpService', () => {
  let service: VideosHttpService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(VideosHttpService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})

import { TestBed } from '@angular/core/testing'

import { VideosHttpService } from './http.service'

describe('HttpService', () => {
  let service: VideosHttpService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(VideosHttpService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})

import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing'

import { VideoStatisticsComponent } from './video-statistics.component'
import { VideoStatistics } from '../../models/response.model'
import { inputSignal } from '../../../utils/input-signal'

describe('VideoStatisticsComponent', () => {
  let component: VideoStatisticsComponent
  let fixture: ComponentFixture<VideoStatisticsComponent>
  const baseStatistics: VideoStatistics = {
    likeCount: '5000',
    viewCount: '40000',
    commentCount: '4',
    dislikeCount: '4500',
    favoriteCount: '499',
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoStatisticsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(
      VideoStatisticsComponent,
    )
    component = fixture.componentInstance
    component.statistics = inputSignal(baseStatistics)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

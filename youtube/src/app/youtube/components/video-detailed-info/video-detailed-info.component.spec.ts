import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing'

import { VideoDetailedInfoComponent } from './video-detailed-info.component'
import { provideHttpClient } from '@angular/common/http'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { provideRouter } from '@angular/router'

describe('VideoDetailedInfoComponent', () => {
  let component: VideoDetailedInfoComponent
  let fixture: ComponentFixture<VideoDetailedInfoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoDetailedInfoComponent],
      providers: [
        provideRouter([
          {
            path: '**',
            component: VideoDetailedInfoComponent,
          },
        ]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(
      VideoDetailedInfoComponent,
    )
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

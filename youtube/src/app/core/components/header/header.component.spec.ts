import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing'

import { HeaderComponent } from './header.component'
import { provideLogger } from '../../providers/logger/logger.provider'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideLogger()],
    }).compileComponents()

    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

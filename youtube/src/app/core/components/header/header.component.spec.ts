import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing'

import { HeaderComponent } from './header.component'
import { provideLogger } from '../../providers/logger/logger.provider'
import { provideMockStore } from '@ngrx/store/testing'

describe('HeaderComponent', () => {
  const initialState = {}
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        provideLogger(),
        provideMockStore({ initialState }),
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

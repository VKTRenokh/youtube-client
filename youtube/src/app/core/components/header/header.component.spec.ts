import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing'

import { HeaderComponent } from './header.component'
import { provideLogger } from '../../providers/logger/logger.provider'
import { provideMockStore } from '@ngrx/store/testing'
import { By } from '@angular/platform-browser'
import { AuthService } from '../../../auth/services/auth/auth.service'

describe('HeaderComponent', () => {
  const initialState = {}
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>
  let authService: AuthService

  const buttons = [
    '.logout-button',
    '.admin-page-button',
    '.favorite-page-button',
  ]

  const select = (query: string) =>
    fixture.debugElement.query(By.css(query))

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        provideLogger(),
        provideMockStore({ initialState }),
      ],
    }).compileComponents()

    authService = TestBed.inject(AuthService)
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Should not show button that require registration by default', () => {
    expect(buttons.every(select)).toBeFalsy()
  })

  it('Should show buttons that require registration if registrated', async () => {
    authService.login()

    fixture.detectChanges()
    await fixture.whenStable()

    expect(buttons.every(select)).toBeTruthy()
  })
})

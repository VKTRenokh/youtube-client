import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing'

import { HeaderComponent } from './header.component'
import { provideLogger } from '../../providers/logger/logger.provider'
import {
  MockStore,
  provideMockStore,
} from '@ngrx/store/testing'
import { By } from '@angular/platform-browser'
import { AuthService } from '../../../auth/services/auth/auth.service'
import { FilterService } from '../../../youtube/services/filter/filter.service'

describe('HeaderComponent', () => {
  const initialState = {}
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>
  let authService: AuthService
  let filteringService: FilterService
  let store: MockStore

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
    store = TestBed.inject(MockStore)
    filteringService = TestBed.inject(FilterService)

    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should not show button that require registration by default', () => {
    expect(buttons.every(select)).toBeFalsy()
  })

  it('should show buttons that require registration if registrated', async () => {
    authService.login()

    fixture.detectChanges()
    await fixture.whenStable()

    expect(buttons.every(select)).toBeTruthy()
  })

  it('should search correctly', async () => {
    const search = 'Search'

    const searchInput: HTMLInputElement =
      select('#search-input').nativeElement

    searchInput.value = search

    searchInput.dispatchEvent(new Event('input'))
    await fixture.whenStable()
    expect(component.searchString.value).toBe(search)
  })

  it('filtering button should work correctly', () => {
    const isShown = filteringService.getIsFilteringShown()
    expect(isShown()).toBeFalsy()

    const button = select('.open-filters-button button')

    expect(button).toBeTruthy()

    button.triggerEventHandler('click', null)

    expect(isShown()).toBeTruthy()
  })
})

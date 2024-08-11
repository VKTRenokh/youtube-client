import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing'

import { FavoriteButtonComponent } from './favorite-button.component'
import {
  MockStore,
  provideMockStore,
} from '@ngrx/store/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'
import { firstValueFrom } from 'rxjs'
import { FavoriteActions } from '../../../state/actions/favorite.actions'

describe('FavoriteButtonComponent', () => {
  const id = 'daedalus37'
  const initialState = { favorites: { data: [id] } }
  const initialStateWithoutId = { favorites: { data: [] } }

  let component: FavoriteButtonComponent
  let fixture: ComponentFixture<FavoriteButtonComponent>
  let store: MockStore

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteButtonComponent],
      providers: [
        provideMockStore({
          initialState,
        }),
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(
      FavoriteButtonComponent,
    )
    component = fixture.componentInstance
    fixture.componentRef.setInput('id', id)
    fixture.detectChanges()

    store = TestBed.inject(MockStore)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should be favorite if has id in store', () => {
    expect(component.isFavorite()).toBeTruthy()
  })

  it('should dispatch correct action when button is clicked', async () => {
    const spy = jest.spyOn(store, 'dispatch')
    const button: DebugElement = fixture.debugElement.query(
      By.css('.favorite-button button'),
    )

    button.triggerEventHandler('click')

    expect(spy).toHaveBeenCalledWith(
      FavoriteActions.remove({ id }),
    )

    spy.mockReset()
    store.setState(initialStateWithoutId)
    button.triggerEventHandler('click')

    expect(spy).toHaveBeenCalledWith(
      FavoriteActions.add({ id }),
    )
  })
})

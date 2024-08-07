import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing'

import { FavoriteButtonComponent } from './favorite-button.component'
import {
  MockStore,
  provideMockStore,
} from '@ngrx/store/testing'
import { inputSignal } from '../../../utils/input-signal'

describe('FavoriteButtonComponent', () => {
  const id = 'daedalus37'
  const initialState = { favorites: { data: [id] } }

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
    component.id = inputSignal(id)
    fixture.detectChanges()
    store = TestBed.inject(MockStore)
  })

  it('should create', () => {
    console.log(store)
    expect(component).toBeTruthy()
  })
})

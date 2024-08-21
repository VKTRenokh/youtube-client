import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing'

import { FavoritesComponent } from './favorites.component'
import { provideMockStore } from '@ngrx/store/testing'

describe('FavoritesComponent', () => {
  const initialState = { favorites: { data: [] } }

  let component: FavoritesComponent
  let fixture: ComponentFixture<FavoritesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritesComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents()

    fixture = TestBed.createComponent(FavoritesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

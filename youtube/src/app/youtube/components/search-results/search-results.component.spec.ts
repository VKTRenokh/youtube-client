import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing'

import { SearchResultsComponent } from './search-results.component'
import { provideMockStore } from '@ngrx/store/testing'

describe('SearchResultsComponent', () => {
  const initialState = {}
  let component: SearchResultsComponent
  let fixture: ComponentFixture<SearchResultsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchResultsComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents()

    fixture = TestBed.createComponent(
      SearchResultsComponent,
    )
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

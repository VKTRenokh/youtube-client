import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing'

import { CardCreationFormComponent } from './card-creation-form.component'
import { provideMockStore } from '@ngrx/store/testing'

describe('CardCreationFormComponent', () => {
  const initialState = {}
  let component: CardCreationFormComponent
  let fixture: ComponentFixture<CardCreationFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCreationFormComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents()

    fixture = TestBed.createComponent(
      CardCreationFormComponent,
    )
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
